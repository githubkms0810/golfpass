<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Category extends Admin_Controller {
    function __construct(){
        parent::__construct(array(
            'table'=>'shop/product_categories',
            'view_dir'=>'admin/category'
        ));
    }
    public function _recursive_tree($parent){
        $data['id'] = $id = $parent->id;
        $data['parent_id'] =$parent->parent_id;
        $data['name'] = $name =$parent->name;
        $childs = $this->db->query("SELECT * FROM $this->table WHERE parent_id= '$id'")->result();
        if(count($childs) ==0){
            return (object)$data;
        }else{
            $data['childs'] = array();
            for($i=0; $i< count($childs); $i++){
                array_push($data['childs'],$this->_recursive_tree($childs[$i]));
            }
        }
        return (object)$data;
        
    }
    public function gets(){
        $this->load->database();
        
        //select from categories
        $categories=array();
        $categories_tmp = $this->db->query("SELECT * FROM $this->table WHERE parent_id= '0'")->result();
        for($i=0; $i< count($categories_tmp); $i++){
            array_push($categories,$this->_recursive_tree($categories_tmp[$i]));
        }
        //view
        $data = array('categories'=>$categories);
         
         $this->_template("gets",$data);
         
    }

    public function add($parent_id){
        $this->_set_rules(null);

        if(!$this->fv->run()){
            $category= (object)array("parent_id"=>$parent_id);
            $data = array('mode'=>"add/$parent_id",'category'=>$category);
             
             $this->_template("addUpdate",$data);
             
        }else{
            $this->_dbSet_addUpdate();
            $this->product_categories_model->_add();
            my_redirect(admin_product_category_uri.'/gets');
        }
    }

    public function update($id){
        $this->_set_rules($id);

        if(!$this->fv->run()){
            $category =$this->db->query("SELECT * FROM $this->table WHERE id = $id")->row();
            $data = array('mode'=>"update/$id",'category'=>$category);
             
             $this->_template("addUpdate",$data);
             
        }else{
            
            $this->_dbSet_addUpdate();
            $this->product_categories_model->_update($id);
            
            my_redirect(admin_product_category_uri.'/gets');
        }
    }
    
    public function _set_rules($id=null){
        if($id !== null) define('rules_arg',$id);
        $this->fv->set_rules('parent_id','상속 카테고리 아이디',array('required',
            array('상속될 카테고리 존재하지 않음.',function($str){
                if($str == '0') return true;
                $row =$this->db->query("SELECT id FROM $this->table WHERE id = '$str'")->row();
                if($row == null) return false;
                return true;
            }),
            array('자기자신을 상속할수 없음',function($str){
                if(defined('rules_arg')){
                    if(rules_arg === $str){
                    return false;
                }
                }
                return true;
            })
         ));
        $this->fv->set_rules('name','카테고리 이름','required');
    }

    public function _dbSet_addUpdate(){
        $this->product_categories_model->_set_by_obj(array(
            "parent_id"=>$this->input->post('parent_id'),
            "name"=>$this->input->post('name')
        ));
    }

    public function delete($id){
        $this->db->where('id', $id);
        $this->db->delete($this->table);
        my_redirect(admin_product_category_uri.'/gets');
    }
    
}

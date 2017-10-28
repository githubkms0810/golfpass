<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Hotel extends Admin_Controller {
    function __construct(){
        parent::__construct(array(
            'table'=>'shop/p_hotel',
            'view_dir'=>'admin/hotel'
        ));
    }

    function options_reset()
    {
        //모두 삭제하고
        $hotel_id = $this->input->post("hotel_id");
        $this->db->where("hotel_id", $hotel_id);
        $this->db->where("kind", 'option');
        $this->db->delete("hotel_option");

        //다시추가
        $arr_option = $this->input->post("option");
        if(is_array($arr_option))
            foreach($arr_option as $val)
            {
                $this->db->set("name",$val);
                $this->db->set("hotel_id",$hotel_id);
                $this->db->set("kind","option");
                $this->db->insert("hotel_option");
            }   
        alert("옵션 추가완료");
        my_redirect($_SERVER['HTTP_REFERER']);
    }



    function ref_product_delete($id)
    {
        $this->db->where('id',$id);
        $this->db->delete('p_ref_hotel');
        my_redirect($_SERVER['HTTP_REFERER']);
    }
    function ref_product_add()
    {
        $this->fv->set_rules('hotel_id','호텔',array('required',
            array('이미 등록 되어있는 호텔입니다.',function($str){
                $this->db->where('hotel_id',$this->input->post('hotel_id'));
                $this->db->where('product_id',$this->input->post('product_id'));
                $row =$this->db->get("p_ref_hotel")->row();
                if($row !== null)
                    return false;
                return true;
            })
        ));
        
        if($this->fv->run() === false)
        {
            alert_validationErrors();
            my_redirect($_SERVER['HTTP_REFERER']);
        }else
        {
            $this->db->set('hotel_id',$this->input->post('hotel_id'));
            $this->db->set('product_id',$this->input->post('product_id'));
            $this->db->insert("p_ref_hotel");
            my_redirect($_SERVER['HTTP_REFERER']);
        }
    }
    function gets()
    {
        $data['rows'] = $this->p_hotel_model->gets_with_pgi();

        $this->_template('gets',$data);
    }

    function add()
    {
        $this->_set_rules();

        if(!$this->fv->run()){
            $data['mode'] ='add';
            $data['row'] = (object)array();
            $this->_template("addUpdate",$data);
        }else{
            $this->_dbSet_addUpdate();
            $insert_id=$this->p_hotel_model->_add();
            alert('추가완료');
            my_redirect(admin_hotel_uri."/update/$insert_id");
        }
        
    }

    function update($id)
    {
        $data['options'] = $this->db->query("SELECT * FROM hotel_option WHERE hotel_id = $id AND kind = 'option'")->result();
        if(parent::_update($id,$data)===true)
        {
            alert("수정완료");
            my_redirect(admin_hotel_uri."/update/$id");
        }
    }
    public function ajax_delete($id){
        parent::_ajax_delete($id);
    }

    

}
<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Wishlist extends Base_Controller {

    function __construct(){
        parent::__construct(array(
            'table'=>'product_cartlist',
            'view_dir'=>"mypage"
        ));
    }
    
    function gets()
    {
        if(!is_login())
        {
            alert("로그인해주세요.");
            my_redirect(user_uri."/login?return_url=".rawurlencode(my_current_url()),false);
        }
        else
        {
            
            $data['page_name'] ="위시리스트";            
            $data['ths'] = array("번호","상품이름","상품가격","날짜","옵션");
            $data['rows'] = $this->product_cartlist_model->gets_with_pgi(array('c.user_id'=>$this->user->id,'c.kind'=>"wishlist"));
            $data['user'] =$this->user;
            $this->_template('index',$data,'golfpass2');
            // $this->_view('gets',$data);
        }
        
    }
    public function ajax_add($product_id){
        header("Content-Type:application/json");

        $order_count = (int)$this->input->post("order_count");
     
      if(!is_login())
      {
        $data['alert'] = "로그인해주세요";
        $data['redirect'] = site_url(user_uri."/login?return_url=".rawurlencode(site_url(shop_product_uri."/get")));
      }
      else //회원일떄
      {
        $user_id = $this->user->id;
        $row=$this->{$this->model}->_get(array("product_id"=>$product_id,"user_id"=>$user_id,"kind"=>"wishlist"));
        if($row === null)
        {
            $this->db->query("INSERT INTO {$this->table} (product_id,user_id,count,kind,created) VALUES ($product_id,$user_id,{$order_count},'wishlist',NOW())");
            $data['confirm_redirect']['msg'] ="위시리스트에 에 추가하였습니다. 확인하시겠습니까?";
            // $data['confirm_redirect']['url'] =site_url(shop_wishlist_uri."/gets");
            $data['confirm_redirect']['url'] =site_url(shop_mypage_uri."/gets_wishlist");
        }
        else{
            $data['confirm_redirect']['msg'] ="위시리스트에 이미 존재합니다. 확인하시겠습니까?";
            // $data['confirm_redirect']['url'] =site_url(shop_wishlist_uri."/gets");
            $data['confirm_redirect']['url'] =site_url(shop_mypage_uri."/gets_wishlist");
        }
    
      }
       

        echo json_encode($data);
        return;
    }

    function ajax_delete($id)
    {
        header("content-type:application/json");
        $this->{$this->model}->_delete($id);
      $data['reload'] = true;
        // $data['redirect'] = site_url( shop_wishlist_uri."/gets");
        echo json_encode($data);
    }
}
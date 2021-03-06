<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Order extends Admin_Controller {

    function __construct(){
        parent::__construct(array(
            'table'=>'admin/product_orders',
            'view_dir'=>'admin/order'
        ));
        
    }
	public function gets()
    {

        $data['orders'] =$this->product_orders_model->gets_with_pgi();
        // $this->load->database();
        // //get totoal_rows
        // $field = $this->input->post('field');
        // if($field) $this->db->like($field, $this->input->post('value'));
        // $total_rows=$this->db->select("count(*)  AS num_rows")
        // ->from("$this->table as o")
        // // ->join("users as u","o.user_id = u.id","INNER")
        // ->get()->row()->num_rows;

        // //get pagination
        // $this->load->library('pagination');
        // $pgiData =$this->pagination->get(array(
        //     'total_rows'=>$total_rows,
        //     'style_pgi'=>'style_1'
        // ));
        // $offset = $pgiData['offset'];
        // $per_page = $pgiData['per_page'];
        
        // //select from orders
        // $field = $this->input->post('field');
        // if($field) $this->db->like($field, $this->input->post('value'));
        
        // $orders  =$this->db->select("o.*, u.userName , u.name 'user_name'")
        // ->from("{$this->table} AS o")
        // ->join('users AS u', 'o.user_id = u.id', 'INNER')
        // ->limit($per_page, $offset)
        // ->order_by('id','desc')
        // ->get()->result();
        
        // //view
        // $data = array('orders'=>$orders);
         
         $this->_template("gets",$data);
         
    }
    public function get($merchant_uid){
        
        $order =$this->product_orders_model->get_with_join(array('o.merchant_uid'=>$merchant_uid));
        $this->load->helper("enum");
        $order->pay_method_enum =get_pay_method_enum($order->pay_method);
        $order->status_enum  =get_status_enum($order->status);
        $product = $this->db->from("products")->where("id",$order->product_id)->get()->row();

        $data['user'] = $this->db->from("users")->where("id",$order->user_id)->get()->row();
        $data['product'] =$product;
        $data['order'] =$order;
         $data['total_price_singleroom'] = (int)$order->num_people * (int)$product->singleroom_price * ((int)$order->period-1);
        //동행자정보
        $infos =$this->db->where("merchant_uid",$merchant_uid)->from("p_order_infos")->get()->result();
        $data['order_infos'] = $infos;
        //그룹
        $groups =$this->db
        ->where("merchant_uid",$merchant_uid)
        ->where("option_kind","group_option")
        ->from("p_order_options")->get()->result();

        $data['order_groups'] = $groups;
        //메인옵션
        $options =$this->db
        ->select("po.*")
        ->where("merchant_uid",$merchant_uid)
        ->where("option_kind","main_option")
        ->from("p_order_options as oo")
        ->join("product_option as po","po.id = oo.option_id")
        ->get()->result();
        $total_price_options =0;
        for($i=0; $i< count($options);$i++)
        {
            $option_name =$options[$i]->name;
            $tmp_option_price = 0;
            for ($j=0; $j < count($groups); $j++) 
            { 
                $option = $this->db->query("SELECT * FROM product_option WHERE product_id =$product->id AND`name` = '$option_name' AND option_1 = {$groups[$j]->value}" )->row();
                $tmp_option_price += (int)$option->price * (int)$groups[$j]->value;
            }
            $options[$i]->price = $tmp_option_price;
            $total_price_options += $tmp_option_price;
        }

        $data['total_price_options'] = $total_price_options;
        $data['order_options'] = $options;
        //홀추가옵션
        $hole_option =$this->db
        ->where("merchant_uid",$merchant_uid)
        ->where("option_kind","hole_option")
        ->from("p_order_options")->get()->row();
        if($hole_option !== null)
        {
            $hole_option=$this->db->from("product_option")
            ->where("id",$hole_option->option_id)->get()->row();
            if($hole_option !== null)
            {
                $added_hole_price = 0;
                $hole_options =array();
                for($i=0;$i<count($groups);$i++)
                {
                    $row=$this->db
                    ->where("product_id",$order->product_id)
                    ->where("kind","hole_option")
                    ->where("name",$hole_option->name)
                    ->where("option_1",$groups[$i]->value)
                    ->from("product_option as o")
                    ->get()->row();
                     array_push($hole_options,$row);
                     $added_hole_price +=$row->price;
                }
              
                $data['hole_options'] = $hole_options;
                $data["added_hole_price"] = $added_hole_price;
            }
           
        }
        $data['hole_option'] = $hole_option;
     
        $this->_template("get",$data);
         
    }
    public function update($id){
        parent:: _dbset_addUpdate();
        $this->product_orders_model->_update($id);       
         $row =$this->product_orders_model->_get($id);
        $merchant_uid = $row->merchant_uid;
        my_redirect(admin_order_uri."/get/$merchant_uid");
    }
    
  
}

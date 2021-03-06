<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Google extends Public_Controller {

	public function __construct()
	{
		parent::__construct();
		$this->load->library('google_api');
	}
	function request_auth()
	{
		$this->google_api->request_auth();
	}
	function redirect_url()
	{
		$auth_result =$this->google_api->login_callback();
		$access_token=$auth_result->access_token;
		$info=$this->google_api->get_user_profile($access_token);

		if($info == null)
		{
			 echo "<script>window.close();</script>";
			 return;
		}
		// var_dump($info);
		// var_dump($info->names[0]->displayName);
		if(isset($info->names[0]->displayName)) //프로필 받아오기 성공이라면
		{
		
			$name = $info->names[0]->displayName;
			$sns_id = $info->emailAddresses[0]->metadata->source->id;
			$email = $info->emailAddresses[0]->value;
			$gender =$info->genders[0]->value;
			$sns_type = "google";

			$this->load->model("sns_info_model");
			$this->load->model("base/users_model");
			$sns_info =$this->sns_info_model->_get(array("sns_email"=>$email,"sns_type"=>$sns_type));
		
			if($sns_info === null) //해당 프로필이 로컬 db에 존재하지 않는다면
			{
			
			
				 $this->db->set("name",$name);
				//  $this->db->set("profilePhoto",$info->profile_image);
				 $this->db->set("userName",$email);
				 $this->db->set("sns_type",$sns_type);
				 $this->db->set("email",$email);
				//  $this->db->set("birth",$info->birthday);
				 $this->db->set("sex",$gender);
				 $this->db->set("auth","1");
				 $this->db->set("kind","general");
				 $insert_id=$this->users_model->_add();
 
				 $this->db->set("user_id",$insert_id);
				 $this->db->set("sns_id",$sns_id);
				 $this->db->set("sns_type",$sns_type);
				 $this->db->set("sns_name",$name);
				 $this->db->set("sns_email",$email);
				//  $this->db->set("sns_profile",$info->profile_image);
				 $this->db->set("refresh_token",$auth_result->refresh_token);
				 $this->sns_info_model->_add();
 
				
			}
			else if((string)$sns_info->refresh_token !== (string)$auth_result->refresh_token || (string)$sns_info->sns_id !== (string)$info->id)//로컬디비의 refresh token 과 일치 하지않는다면
			{
				 $this->db->set("refresh_token",$auth_result->refresh_token);
				 $this->db->set("sns_id",$sns_id);
				 $this->db->where("sns_email",$email);
				 $this->db->where("sns_type",'google');
				 $this->sns_info_model->_update();
			}
 
			//로그인 시키고 리다이렉트
			$user_id =  $this->sns_info_model->_get(array("sns_id"=>$sns_id))->user_id;
			$user = $this->users_model->_get($user_id);
		    // var_dump($user);
		   
			$this->session->set_userdata(array('is_login'=>'true','user_id'=>$user->id,'userName'=>$user->userName,'auth'=> $user->auth));
			// $url = $this->input->get("return_url");
			$url = site_url("");
			echo "<script>window.opener.location.href='{$url}';</script>";
			echo "<script>window.close();</script>";
		}
	}

}

/* End of file Google.php */
/* Location: .//C/Users/이재윤/Desktop/01shortcut/modules/api/controllers/Google.php */
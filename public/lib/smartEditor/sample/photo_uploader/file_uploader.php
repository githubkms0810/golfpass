<?php
// default redirection
$url = $_REQUEST["callback"].'?callback_func='.$_REQUEST["callback_func"];
$bSuccessUpload = is_uploaded_file($_FILES['Filedata']['tmp_name']);

// SUCCESSFUL
// default redirection

$url = $_REQUEST["callback"].'?callback_func='.$_REQUEST["callback_func"];

$bSuccessUpload = is_uploaded_file($_FILES['Filedata']['tmp_name']);




// SUCCESSFUL

if(bSuccessUpload) {

$tmp_name = $_FILES['Filedata']['tmp_name'];

//업로드 이미지 파일이름 중복 방지 코드

$addName = strtotime(date("Y-m-d H:i:s"));

$milliseconds = round(microtime(true) * 1000);  //밀리초 구하기

$addName .= $milliseconds;       //파일이름에 밀리초 추가하기

//업로드 이미지 파일이름 중복 방지를 위해 수정되는 코드

$name = $addName . '_' . $_FILES['Filedata']['name'];
 
	
	$filename_ext = strtolower(array_pop(explode('.',$name)));
	$allow_file = array("jpg", "png", "bmp", "gif");
	//$name = time().$filename_ext;
	
	if(!in_array($filename_ext, $allow_file)) {
		$url .= '&errstr='.$name;
	} else {
		$uploadDir = '../../upload/';
		if(!is_dir($uploadDir)){
			mkdir($uploadDir, 0777);
		}
		
		$newPath = $uploadDir.urlencode($name);
		
		@move_uploaded_file($tmp_name, $newPath);
		
		$url .= "&bNewLine=true";
		$url .= "&sFileName=".urlencode(urlencode($name));
		$url .= "&sFileURL=/naver/upload/".urlencode(urlencode($name));
		
		//echo $url;
		//exit;
	}
}
// FAILED
else {
	$url .= '&errstr=error';
}
	
header('Location: '. $url);
?>
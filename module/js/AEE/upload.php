<?php
//���������ϴ����ļ���չ��
$ext_arr = array('gif','jpg','png','bmp','swf','mp3','wmv');
//����ļ���С
$max_size = 10000000;
//����Ŀ¼Ȩ��
@mkdir($save_path, 0777);
//���ϴ��ļ�ʱ
if (empty($_FILES) === false) {
	//�ļ�����Ŀ¼·��
	$save_path = $_POST["AEE_uploadPath"];
	//ԭ�ļ���
	$file_name = $_FILES['AEE_uploadFile']['name'];
	//����������ʱ�ļ���
	$tmp_name = $_FILES['AEE_uploadFile']['tmp_name'];
	//�ļ���С
	$file_size = $_FILES['AEE_uploadFile']['size'];
	//�ļ���ȫ��·��
	$file_path = $save_path.$_POST['AEE_uploadFinally'];
	//���Ŀ¼
	if (@is_dir($save_path) === false) {
		echo '<script type="text/javascript">alert("It was not possible to open destination directory.");</script>';
		exit;
	}
	//���Ŀ¼дȨ��
	if (@is_writable($save_path) === false) {
		echo '<script type="text/javascript">alert("The directory is not writable.");</script>';
		exit;
	}
	//����Ƿ����ϴ�
	if (@is_uploaded_file($tmp_name) === false) {
		echo '<script type="text/javascript">alert("Possible file upload attack.");</script>';
		exit;
	}
	//����ļ���С
	if ($file_size > $max_size) {
		echo '<script type="text/javascript">alert("The uploaded file exceeds the max_size.");</script>';
		exit;
	}
	//����ļ���չ��
	$file_ext = strtolower(trim(array_pop(explode(".",$file_name))));
	//�����չ��
	if (in_array($file_ext, $ext_arr) === false) {
		echo '<script type="text/javascript">alert("This type of file is not accepted.");</script>';
		exit;
	}
	//�ƶ��ļ�
	if (move_uploaded_file($tmp_name, $file_path) === false) {
		echo '<script type="text/javascript">alert("Something is wrong with the file.");</script>';
		exit;
	}
	echo '<script type="text/javascript">parent.AEE.popupDiv.innerHTML=\'\';</script>';
}
?>
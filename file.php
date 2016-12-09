<?php
//php 接收表单提交信息并打印
if( isset( $_REQUEST['but']) ){
  var_dump($_REQUEST);
  var_dump($_FILES);
  die();
}

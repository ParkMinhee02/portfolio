<?php if(!defined("__XE__")) exit();
$db_info = (object)array (
  'master_db' => 
  array (
    'db_type' => 'mysqli',
    'db_port' => '3306',
    'db_hostname' => 'localhost',
    'db_userid' => 'pmhportfolio',
    'db_password' => 'min0206hee!',
    'db_database' => 'pmhportfolio',
    'db_table_prefix' => 'xe_',
  ),
  'slave_db' => 
  array (
    0 => 
    array (
      'db_type' => 'mysqli',
      'db_port' => '3306',
      'db_hostname' => 'localhost',
      'db_userid' => 'pmhportfolio',
      'db_password' => 'min0206hee!',
      'db_database' => 'pmhportfolio',
      'db_table_prefix' => 'xe_',
    ),
  ),
  'default_url' => 'http://pmhportfolio.dothome.co.kr/xe/',
  'lang_type' => 'ko',
  'use_mobile_view' => 'Y',
  'use_rewrite' => 'Y',
  'time_zone' => '+0900',
);
<?php 
include 'engine.php';

$function = $_GET['func'];

if (function_exists($function)) {

      $function();

}

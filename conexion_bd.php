<?php
#Se hace la conexion a la BD usando el servidor,nombre de usuario,contraseña y nombre de la BD
$conexion=new mysqli("localhost","root","","toolsinc");
#la conexion se hace en utf8 para que no haya problemas con los acentos
$conexion->set_charset("utf8");
?>
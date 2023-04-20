<?php
#Registro de herramientas
if(!empty($_POST["enviar"])){
    $idherramienta = $_POST["id_tool"];
    $nombreherramienta = $_POST["name_tool"];
    $colorherramienta = $_POST["color_tool"];
    $tipodeherramienta = $_POST["type_tool"];
    $fechadeherramienta = $_POST["date_tool"];
    $descripcionherramienta = $_POST["description_tool"];
    $sql=$conexion->query("INSERT INTO herramientas (id, nombre, color, tipo, fecha, descripcion) VALUES ('$idherramienta', '$nombreherramienta', '$colorherramienta', '$tipodeherramienta', '$fechadeherramienta', '$descripcionherramienta')");    
}
#Registro de trabajadores
if(!empty($_POST["enviar1"])){
    $idtrabajador = $_POST["id_worker"];
    $nombretrabajador = $_POST["name_worker"];
    $telefonotrabajador = $_POST["phone_worker"];
    $correotrabajador = $_POST["email_worker"];
    $fechatrabajador = $_POST["date_worker"];
    $puestotrabajador = $_POST["work_worker"];
    $sql=$conexion->query("INSERT INTO trabajadores (id, nombre, telefono, correo, fecha_registro, puesto) VALUES ('$idtrabajador', '$nombretrabajador', '$telefonotrabajador', '$correotrabajador', '$fechatrabajador', '$puestotrabajador')");
} 
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <?php
    //Pasando los datos al server
    $servername = "localhost";
    $database = "toolsinc";
    $username = "jesusrosml";
    $password = "Design23Web";

    //Recuperacion de variables del HTML
    $idtool = $_POST['id_tool'];
    $nametool = $_POST['name_tool'];
    $colortool = $_POST['color_tool'];
    $typetool = $_POST['type_tool'];
    $datetool = $_POST['date_tool'];
    $descriptiontool = $_POST['description_tool'];

    //Conexion a la database
    $conexion = mysqli_connect($servername, $database, $username, $password);
    //Ingresando valores a la base de datos
    $sql = "INSERT INTO registrationtools (id_tool, name_tool, color_tool, type_tool, date_tool, description_tool)
    values ('$idtool', '$nametool', '$colortool', '$typetool', '$datetool', '$descriptiontool')";

    if(mysqli_query($conexion, $sql)) {
        echo "registro completado";
    }
    ?>
    <br>
    <button><a href="../QRHerramientas.html">Regresar al inicio</a></button>



</body>
</html>
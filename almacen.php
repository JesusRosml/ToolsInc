<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Almacen de herramientas</title>
    <!-- Estilos CSS -->
    <link rel="stylesheet" href="assets/styles/almacen.css">
    <link rel="stylesheet" href="assets/styles/normalize.css">
    <script src="https://kit.fontawesome.com/807171747a.js" crossorigin="anonymous"></script>
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><i class="fa-solid fa-house"></i><a href="lectorQR.php">Autorización de prestamos</a></li>
                <li><i class="fa-solid fa-file-circle-plus"></i><a href="QRHerramientas.php">Registro de herramientas</a></li>
                <li><i class="fa-solid fa-users-viewfinder"></i><a href="QRTrabajadores.php">Registro de trabajadores</a></li>
                <li><i class="fa-solid fa-box-archive"></i><a href="almacen.php">Almacen</a></li>
                <!-- <li><i class="fa-sharp fa-solid fa-clock"></i><a href="historial.php">Historial</a></li> -->
            </ul>
        </nav>
    </header>
    <div class="container-father">
        <div class="container-tool">
            <h2>Herramientas</h2>
            <?php
            #Incluir la coniexion de la BD
            include("conexion_bd.php");
            #Por cada fila que encuentre en la tabla herramientas, se va a crear una lista con los datos de la herramienta
            
            foreach ($conexion->query('SELECT * from herramientas') as $row) { #Aqui el foreach se abre y se cierra hasta despues?>
            <!-- Los datos son introducidos en el HTML y los echo con php -->
                <ul>
                    <li>Nombre: <em><?php echo $row['nombre']?></em></li>
                    <li>ID: <em><?php echo $row['id']?></em></li>
                    <li>Color: <em><?php echo $row['color']?></em></li>
                    <li>Tipo: <em><?php echo $row['tipo']?></em></li>
                    <li>Fecha: <em><?php echo $row['fecha']?></em></li>
                </ul>
            <!-- Es importante cerrar el foreach para que pueda servir -->
            <?php
            }
            ?>

            <div class="containercards-tool">
                <div class="cardstool"> <!-- Pasar a display: block; -->
                    <ul>
                        <!-- Los datos los meteras en <em> -->
                        <li>Nombre: <em></em></li>
                        <li>ID: <em></em></li>
                        <li>Color: <em></em></li>
                        <li>Tipo: <em></em></li>
                        <li>Fecha: <em></em></li>
                    </ul>

                    <details>
                        <summary>Descripcion de la herramienta</summary>
                        <article>
                            <!-- Meter descripcion en la etiqueta <p> -->
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sapiente temporibus molestias veniam repellat, culpa beatae voluptatibus! Unde culpa rem, aut perspiciatis sequi repellat doloremque minima debitis eos mollitia porro!</p>
                        </article>
                    </details>

                    <button>Eliminar herramienta</button>
                </div>    
            </div>
        </div>
    
        <div class="container-trabajador">
            <h2>Trabajadores</h2>
            <?php
            foreach ($conexion->query('SELECT * from trabajadores') as $row) {?>
                <ul>
                    <li>Nombre: <em><?php echo $row['nombre']?></em></li>
                    <li>ID: <em><?php echo $row['id']?></em></li>
                    <li>Telefono: <em><?php echo $row['telefono']?></em></li>
                    <li>Correo: <em><?php echo $row['correo']?></em></li>
                    <li>Fecha: <em><?php echo $row['fecha_registro']?></em></li>
                    <li>Puesto de trabajo: <em><?php echo $row['puesto']?></em></li>
                </ul>
            <?php
            }
            ?>

            <div class="containercard-trabajadores">
                <div class="cardstrabajadores"> <!-- Display: none; a block -->
        <!-- Los datos los meteras en <em> -->
                    <ul>
                        <li>Nombre: <em></em></li>
                        <li>ID: <em></em></li>
                        <li>Telefono: <em></em></li>
                        <li>Correo: <em></em></li>
                        <li>Fecha: <em></em></li>
                        <li>Puesto de trabajo: <em></em></li>
                    </ul>

                    <button>Eliminar trabajador</button>
                </div>
            </div>
        </div>
    </div>
    
</body>
</html>
<?php
session_start();
session_destroy();
unset($_SESSION['connected']);

header('Location: index.php');
?>
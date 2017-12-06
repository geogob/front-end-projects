<?php
session_start();
$pg = $_GET["pg"];

#Topo
include "topo.php";

#Conteúdo
switch ($pg) {
	case '1':
		include "about.php";
		break;
	case '2':
		include "about.php";
		break;
	case '3':
		include "news.php";
		break;
	case '4':
		include "projects.php";
		break;
	case '5':
		include "publications.php";
		break;
	case '6':
		include "researchers.php";
		break;
	case '7':
		include "events.php";
		break;
	case '8':
		include "contato.php";
		break;
	default:
		include "home.php";
		break;
}

?>
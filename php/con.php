<?
class con{
	function rebuild(){
		$c=pvar("c");
		$file = fopen("js/content.js","w");
		$con="var _c=".$c;
		echo fwrite($file,$con);
		fclose($file);
	}
}




//return "test1";
/*
$file = fopen("js/content.js","w");
echo fwrite($file,"Hello World. Testing!");
fclose($file);
*/
?> 
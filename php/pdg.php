<?
$qurl='../php/lib/curl.php';
require($qurl);
class pdg{
    static $post=false;
    static $url='http://localhost/5/_pdg/api';
    function enrollment(){
        $post=self::$post;
        $post['scope']='ifo';
        $post['request']='enrollment';
        $r=qurl(self::$url,$post);
        return $r;
    }
    function hiro(){
        $p=pdg::$post;
        $p['sid']=-1;
        $p['scope']='hiro';
        $p['request']=$_POST['request'];
        $r=qurl(self::$url,$p);
        return $r;
    }
}
//initializer - leave at bottom
pdg::$post=[];
if(isset($_SESSION['hiro'])){
    foreach($_SESSION['hiro'] as $i=>$val){
        pdg::$post[$i]=$val;
    }
}
$path=home_path();
require($path."/cred/api.php");
pdg::$post['pwd']=$vv_apipwd;
?> 
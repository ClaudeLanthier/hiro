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
        $post['typ']=$_POST['typ'];
        $r=qurl(self::$url,$post);
        return $r;
    }
    function hiro(){
        $p=pdg::$post;
        $p['sid']=-1;
        $p['scope']='hiro';
        $p['request']=$_POST['request'];
        if(isset($_POST['v'])){$p['v']=$_POST['v'];}
        if(isset($_POST['usr'])){$p['u']=$_POST['usr'];if(isset($_POST['pwd'])){$p['p']=$_POST['pwd'];};}
        $r=qurl(self::$url,$p);
        if($r){
            $z=json_decode($r,1);
            if(isset($z['sess'])){
                $z=$z['sess'];
                if($z){$_SESSION['hiro']=$z;}else{unset($_SESSION['hiro']);}
            }
        }
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
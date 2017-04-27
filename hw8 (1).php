<?php
header('Access-Control-Allow-Origin: *');
  if($_GET['branch']=="legislator"){
$url="http://104.198.0.197:8080/legislators?apikey=3bc3bcf9451949adb6ca3b1626bda00f&per_page=all";
     $json=file_get_contents($url);

echo $json;    
    }
 else if($_GET['branch']=="l_house"){
$url="http://104.198.0.197:8080/legislators?apikey=3bc3bcf9451949adb6ca3b1626bda00f&chamber=house&per_page=all";
     $json=file_get_contents($url);

echo $json;    
    }
else if($_GET['branch']=="l_senate"){
$url="http://104.198.0.197:8080/legislators?apikey=3bc3bcf9451949adb6ca3b1626bda00f&chamber=senate&per_page=all";
     $json=file_get_contents($url);

echo $json;    
    }


else
    if($_GET['branch']=="bills"){
$url="http://104.198.0.197:8080/bills?apikey=3bc3bcf9451949adb6ca3b1626bda00f&per_page=50";

$json=file_get_contents($url);

echo $json;}


else if($_GET['branch']=="bills_data")
{
$url="http://104.198.0.197:8080/bills?sponsor_id__in=".$_GET['id']."&apikey=3bc3bcf9451949adb6ca3b1626bda00f&per_page=all"; 
$json=file_get_contents($url);
echo $json;
}
 
else if($_GET['branch']=="new_bills")
 {
    $url="http://104.198.0.197:8080/bills?apikey=3bc3bcf9451949adb6ca3b1626bda00f&history.active=false&per_page=50";
     $json=file_get_contents($url);
    echo $json;
 }

else if($_GET['branch']=="comm_data")
 {
    $url="http://104.198.0.197:8080/committees?member_ids=".$_GET['id']."&apikey=3bc3bcf9451949adb6ca3b1626bda00f&per_page=all";
     $json=file_get_contents($url);
    echo $json;
 }
else if($_GET['branch']=="hcommittee")
 {
    $url="http://104.198.0.197:8080/committees?apikey=3bc3bcf9451949adb6ca3b1626bda00f&chamber=house&per_page=all";
     $json=file_get_contents($url);
    echo $json;
 }
else if($_GET['branch']=="scommittee")
 {
    $url="http://104.198.0.197:8080/committees?apikey=3bc3bcf9451949adb6ca3b1626bda00f&chamber=senate&per_page=all";
     $json=file_get_contents($url);
    echo $json;
 }
else if($_GET['branch']=="jcommittee")
 {
    $url="http://104.198.0.197:8080/committees?apikey=3bc3bcf9451949adb6ca3b1626bda00f&chamber=joint&per_page=all";
     $json=file_get_contents($url);
    echo $json;
 }


else
{
    echo "FAILURE";
}


    ?>
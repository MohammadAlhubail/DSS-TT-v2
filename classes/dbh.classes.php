<?php

class Dbh {

    private function connect(){

        try{
            $username = "root";
            $password = "";
            $dbh = new PDO('mysql:host=http://127.0.0.1:5500/;dbname=oooplogin', $username, $password);
            return $dbh;

        }catch(PDOException $e){
            print "Error!: " . $e->getMessage() . "<br/>"; 
            die();
        }
    }

}

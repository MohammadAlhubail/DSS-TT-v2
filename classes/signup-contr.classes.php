<?php

class SignupContr {

    private $username;
    private $email;
    private $password;
    private $ConfirmPassword;
    private $result;

    public function __construct($username, $email, $password, $ConfirmPassword, $result){

        $this->username = $username;
        $this->email = $email;
        $this->password = $password;
        $this->ConfirmPassword = $ConfirmPassword;
        $this->result = $result;
    }   

    private function emptyInput() {

        if (empty($this->username) || empty($this->password) || empty($this->ConfirmPassword) || empty($this->email)) { 
            $this->result = false;
        }
        else {
            $this->result = true;
        }
        return $this->result;
     }

    private function invalidusername() {

        if (!preg_match("/^[a-zA-Z0-9]*$/", $this->username))
        {
            $this->result = false;
            }
            else
           {
              $this->result = true;
        }
        return $this->result;
    }

    private function invalidEmail() {

        if (!filter_var($this->email, FILTER_VALIDATE_EMAIL)){
            $this->result = false;
        }else{
            $this->result = true;
        }
        return $this->result;
    }

    private function pwdMatch() {

        if ($this->password !== $this->ConfirmPassword){
            $this->result = false;
        }else{
            $this->result = true;
        }
        return $this->result;
    }

}

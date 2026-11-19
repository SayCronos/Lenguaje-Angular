import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public formLogin!: FormGroup;
  
  email: string = "carlos@gmail.com";
  pass: string = "123123"

  isLogin: boolean = true;
  
  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formInit();
    

  }
 //metodo para inicializar el formulario
  public formInit() {
    this.formLogin = this.fb.group({
      email: [''],
      password: [''],
      rememberMe: [false]
    });
  }

  //Metodo para iniciar sesion
  iniciarSesion(){
    const data = this.formLogin.value;

    if ( data.email != this.email && data.pass != this.pass){
      this.isLogin = false

      setTimeout(() => {
        this.isLogin = true
      }, 2000);
    }
    else{
      sessionStorage.setItem('login', 'true')
      setTimeout(() => {
        this.router.navigate(['/pages/dashboard'])  
      }, 2000);
    }

  }
}
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public formRegister!: FormGroup;
    constructor(
      private fb: FormBuilder
    ) {}
  
    ngOnInit(): void {
      this.formInit();
      
  
    }
   //metodo para inicializar el formulario
    public formInit() {
      this.formRegister = this.fb.group({
        email: [''],
        password: [''],
        repassword: [''],
        rememberMe: [false]
      });
    }
  
    //Metodo para iniciar sesion
    Registrarse(){
      const data = this.formRegister.value;
      console.log(data);
    }
}

import { Component } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  imports: [FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  email: string='';
  password: string='';

  constructor(private authService: AuthService,private router: Router) {}

  login(): void {
    this.authService.login(this.email, this.password)
      .then(()=>{setTimeout(()=>{
        if(this.email.endsWith('@estudiante.edu.ec')){
          this.router.navigate(['/students']);
        }else if (this.email.endsWith('@docente.edu.ec')){
          this.router.navigate(['/teachers']);
        }
        },500);})
      .catch((error)=>{console.log(error)});

  }
}

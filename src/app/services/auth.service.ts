import { Injectable } from '@angular/core';
import {Auth, onAuthStateChanged, signInWithEmailAndPassword, User} from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: User|null = null;
  private currentUserName: string='';
  constructor(private auth: Auth) {
    onAuthStateChanged(this.auth,(user)=>{this.currentUser=user});
  }
  login(email: string, password: string){
    this.currentUserName=email;
    return signInWithEmailAndPassword(this.auth,email, password)
  }
  logout(){
    return this.auth.signOut();
  }
  redirectToStudentUrl():boolean{
    return this.currentUser!==null && this.currentUserName.endsWith('@estudiante.edu.ec');
  }

  redirectToTeacherUrl():boolean{
    return this.currentUser!==null && this.currentUserName.endsWith('@docente.edu.ec');
  }
}

import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {StudentsComponent} from './pages/students/students.component';
import {TeachersComponent} from './pages/teachers/teachers.component';
import {LoginComponent} from './pages/login/login.component';
import {Page404Component} from './pages/page404/page404.component';
import {studentGuard} from './guards/student-guard.guard';
import {teacherGuard} from './guards/teacher-guard.guard';

export const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'students', component:StudentsComponent,canActivate:[studentGuard]},
  {path:'teachers', component:TeachersComponent,canActivate:[teacherGuard]},
  {path:'login', component:LoginComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'**', component:Page404Component}
];

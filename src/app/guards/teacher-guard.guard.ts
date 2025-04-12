import {CanActivateFn, Router} from '@angular/router';
import {AuthService} from "../services/auth.service";
import {inject} from "@angular/core";

export const teacherGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router=inject(Router);
  if(authService.redirectToTeacherUrl()){
    return true;
  }else{
    router.navigate(['/login']);
    return false;
  }
};

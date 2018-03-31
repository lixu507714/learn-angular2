import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'login', loadChildren: 'app/pages/_global/login/login-module#LoginModule'
  },
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'login', pathMatch: 'full'
  }
];

export const ROOT_ROUTING = RouterModule.forRoot(routes);

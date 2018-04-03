import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {LoginRoutingModule} from './login-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    NgZorroAntdModule
  ],
  declarations: [LoginComponent],
  providers: []
})
export class LoginModule {
}

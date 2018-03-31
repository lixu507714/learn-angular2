import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {ROOT_ROUTING} from './app-routing.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ROOT_ROUTING,
    NgZorroAntdModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

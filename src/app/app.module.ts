import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NavbarComponent} from './navbar/navbar.component';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule,ReactiveFormsModule}from '@angular/forms';
import { LeafComponent } from './leaf/leaf.component';
import { UdemyCourseComponent } from './udemy-course/udemy-course.component';
import { LeafWithParamComponent } from './leaf-with-param/leaf-with-param.component';
import { LoginformComponent } from './loginform/loginform.component';
@NgModule({
  declarations: [
    AppComponent,
    LeafComponent,
    UdemyCourseComponent,
    NavbarComponent,
    LeafWithParamComponent,
    LoginformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:"",component:LeafComponent},
      {path:"udemy",component:UdemyCourseComponent},
      {path:"leaf",component:LeafComponent},
      {path:"leafWith:/",component:LeafWithParamComponent},
      {path:"sinup",component:LoginformComponent},        
    ])
  ],  
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }

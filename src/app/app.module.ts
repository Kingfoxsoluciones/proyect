import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router'

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { appRoutes } from './routes';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

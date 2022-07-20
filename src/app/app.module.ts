import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { HttpClientModule } from '@angular/common/http';

import { appRoutingModule } from "./app.routing";

import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { RepoComponent } from './repo/repo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RepoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    appRoutingModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyC3BtBt83P5Yi7qqkQ_bwPARZRfKYjrLhU",
      authDomain: "gitoauth-23414.firebaseapp.com",
      projectId: "gitoauth-23414",
      storageBucket: "gitoauth-23414.appspot.com",
      messagingSenderId: "758146809090",
      appId: "1:758146809090:web:fb4721cc4cf5159114161b",
      measurementId: "G-YJE5VEXYJ8"
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

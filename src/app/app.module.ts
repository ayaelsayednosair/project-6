import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {YouTubePlayerModule } from '@angular/youtube-player';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidbarComponent } from './sidbar/sidbar.component';
import { HeaderComponent } from './sidbar/header/header.component';
import { FormsModule } from '@angular/forms';
import { AppBarComponent } from './app-bar/app-bar.component';
import { ParantComponent } from './parant/parant.component';
import { ChildComponent } from './parant/child/child.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    SidbarComponent,
    HeaderComponent,
    AppBarComponent,
    ParantComponent,
    ChildComponent,
    TestComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
FormsModule,
YouTubePlayerModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

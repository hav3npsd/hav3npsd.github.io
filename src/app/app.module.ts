import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MainComponent } from '@pages/main/main.component';
import { MainModule } from '@pages/main/main.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, MainComponent],
  imports: [BrowserModule, AppRoutingModule, MainModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

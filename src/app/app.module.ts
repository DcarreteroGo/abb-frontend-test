import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { CustomSelectComponent } from './shared/components/custom-select/custom-select.component';
import { OutsideClickDirective } from './shared/outside-click.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomSelectComponent,
    OutsideClickDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

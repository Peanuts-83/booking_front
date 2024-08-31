import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { TableComponent } from './components/common/table/table.component';
import { BaseListComponent } from './components/common/base-list/base-list.component'

@NgModule({
  declarations: [
    AppComponent,
    BaseListComponent,
    NavbarComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

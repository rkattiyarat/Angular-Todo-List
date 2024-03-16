import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodoComponent } from './todo/todo.component';
import { DropdownDirective } from './dropdown.directive';
import { FormsModule } from '@angular/forms';
import { ActiveComponent } from './active/active.component';
import { CompletedComponent } from './completed/completed.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoComponent,
    DropdownDirective,
    ActiveComponent,
    CompletedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

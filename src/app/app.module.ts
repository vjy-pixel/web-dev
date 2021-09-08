import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './MyComps/todos/todos.component';
import { AddTodoComponent } from './MyComps/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
import { TodoItemComponent } from './MyComps/todo-item/todo-item.component';
import { AboutComponent } from './MyComps/about/about.component';
// import { TodoItemComponent } from './MyComps/todo-item/todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    AddTodoComponent,
    TodoItemComponent,
    AboutComponent
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

import { JsonPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = []
  localItem:string
  constructor() { 
   this.localItem = localStorage.getItem('todos')

   if(this.localItem === null){
     this.todos = []
   }
   else{
     this.todos = JSON.parse(this.localItem)
   }
  }

  ngOnInit(): void {
  }

  deleteTodo(todo:Todo){
    // console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }

  addTodo(todo:Todo){
    this.todos.push(todo)
    // console.log(this.todos)
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }

  todoCheckboxClicked(todo:Todo){
    const index = this.todos.indexOf(todo)
    this.todos[index].active = !this.todos[index].active
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }
  
}

import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Todo } from 'src/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title:string
  description:string
  flag = false;
  @Output() addTodo: EventEmitter<Todo> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const add = {
      sno:7,
      title:this.title,
      desc:this.description,
      active:true
    }
    this.addTodo.emit(add)
  }

  down1(){
    this.flag = true
    console.log("downnnnnnnnnnnnnn---1");
  }

  up1(){
    if(this.flag){
      console.log("uppppppppppppppppp---1");
      this.flag = false;
    }
  }
  down2(){
    this.flag = true
    console.log("downnnnnnnnnnnnnn---2");
  }

  up2(){
    if(this.flag){
      console.log("uppppppppppppppppp---2");
      this.flag = false;
    }
  }
}

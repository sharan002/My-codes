import { Component } from '@angular/core';
import { Todointerface } from '../todointerface';
import { TODO } from '../todo';
import {addTodo,removeTodo} from '../Store/todo.actions'

import { State, Store } from '@ngrx/store';
@Component({
  selector: 'app-todoview',
  templateUrl: './todoview.component.html',
  styleUrls: ['./todoview.component.css']
})
export class TodoviewComponent {

  newTodoText = "";
  todos : TODO[] = []
  
  constructor(private store : Store<{todo : Todointerface}>){
    store.select((state)=> state.todo.todos).subscribe((todos)=>{
      this.todos = todos;
    })
  }
  
  addTodo() {
    // Dispatch the 'addTodo' action with the new todo text
    this.store.dispatch(addTodo({ text: this.newTodoText }));
    this.newTodoText = '';
  }
 
 removeTodo(id : number){
  this.store.dispatch(removeTodo({ id }));
 }


}

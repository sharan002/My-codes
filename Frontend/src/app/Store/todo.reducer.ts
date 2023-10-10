import {createReducer,on} from '@ngrx/store'
import {addTodo,removeTodo} from './todo.actions'
import { Todointerface } from '../todointerface'
import { TODO } from '../todo'
import { state } from '@angular/animations';

const initialState: Todointerface = {
    todos: [],
  };

export const todoreducer = createReducer(
   initialState,
   on(addTodo, (state, { text }) => ({
    ...state,
    todos: [...state.todos, { id: state.todos.length + 1, text }],
  })),

  on(removeTodo, (state, { id }) => ({
    ...state,
    todos: state.todos.filter((todo) => todo.id !== id),
  }))

)
  
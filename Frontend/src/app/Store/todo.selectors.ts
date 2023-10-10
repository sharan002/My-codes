import {createFeatureSelector,createSelector} from '@ngrx/store';
import {Todointerface } from '../todointerface'

const selectTodoState = createFeatureSelector<Todointerface>('todo');

export const selectTodos = createSelector(
    selectTodoState,
    (state) => state.todos
  );
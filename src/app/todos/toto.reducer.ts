import { createReducer, on } from '@ngrx/store';
import { crear, toggle, editar, borrar, toggleAll, limpiarTodos } from './todo.actions';
import { Todo } from './models/todo.models';

 
export const estadoInicial: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('aaaaa'),
  new Todo('bbbb'),
  new Todo('cccc'),
];
 
const _todoReducer = createReducer(estadoInicial,
  on(limpiarTodos, state => state.filter( todo=>!todo.completado) ),
  on(crear, (state, {texto}) => [...state, new Todo( texto )] ),
  on(borrar, (state, {id})  => state.filter( todo => todo.id !== id)),
  
  on(toggleAll, (state, {completado})  => {
    return state.map( todo => {
        return {
          ...todo,
          completado: completado
        }

    });
  }),

  on(toggle, (state, {id}) => {
    return state.map( todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado
        }
      } else {
        return todo;
      }
    });
  }),
  on(editar, (state, {id,texto}) => {
    return state.map( todo => {
      if (todo.id === id) {
        return {
          ...todo,
          texto: texto
        }
      } else {
        return todo;
      }
    });
  }),


);
 
export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
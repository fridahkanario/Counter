
import { Action } from '@ngrx/store';
import { ActionTypes} from './counter.action';

export const initialState = 0;

export function counterReducer( state = initialState, action: Action) {

  if (action.type ===  ActionTypes.ADD) {
        return state + 1;
    }
  if (action.type === ActionTypes.SUBTRACT) {
        return state - 1;
    }
  if (action.type === ActionTypes.CLEAR) {
        return 0 ;
    }
  return state;
}

import { Action } from '@ngrx/store';

export enum ActionTypes {
 ADD = 'INCREASE_COUNTER',
 SUBTRACT = 'DECREASE_COUNTER',
 CLEAR = 'REDUCE_COUNTER'
}

export class ADD implements Action {
    readonly type = ActionTypes.ADD;
  }

export class SUBTRACT implements Action {
    readonly type = ActionTypes.SUBTRACT;
  }
export class CLEAR implements Action {
    readonly type = ActionTypes.CLEAR;
  }


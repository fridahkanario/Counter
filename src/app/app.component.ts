import { Component } from '@angular/core';
import { Store , select} from '@ngrx/store';
import { ADD, SUBTRACT, CLEAR} from '../counter/counter.action' ;
import { Observable } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public count: Observable<number>;

  constructor(private store: Store<{count: number}> ) {
    this.count = store.pipe (select('count'));
  }

increase() {
  this.store.dispatch(new ADD());
}
decrease() {
  this.store.dispatch(new SUBTRACT());
}
reset() {
  this.store.dispatch(new CLEAR());
}
}

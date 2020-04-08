import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgRedux, NgReduxModule} from '@angular-redux/store';
import {AppState} from './app.types';
import {TrackListEpicFactory} from '../track-list/track-list.epic';
import {combineEpics, createEpicMiddleware} from 'redux-observable-es6-compat';
import {applyMiddleware, createStore} from 'redux';
import {appReducer} from './app.reducer';

@NgModule({
  imports: [
        NgReduxModule
  ]
})
export class StateModule {
  constructor(public ngRedux: NgRedux<AppState>, private trackEpicFactory: TrackListEpicFactory) {
    const epicMiddleware = createEpicMiddleware();

    const store = createStore(
      appReducer,
      {},
      applyMiddleware(epicMiddleware)
    );

    ngRedux.provideStore(store);
    epicMiddleware.run(combineEpics(
      this.trackEpicFactory.createLoadTracksEpic()
    ));
  }
}

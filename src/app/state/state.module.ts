import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgRedux, NgReduxModule} from '@angular-redux/store';
import {AppState} from './app.types';
import {TrackListEpicFactory} from '../track-list/track-list.epic';
import {combineEpics, createEpicMiddleware} from 'redux-observable';
import {applyMiddleware, createStore} from 'redux';
import {appReducer} from './app.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgReduxModule
  ]
})
export class StateModule {
  constructor(public ngRedux: NgRedux<AppState>, private sampleEpicFactory: TrackListEpicFactory) {
    const epicMiddleware = createEpicMiddleware();

    const store = createStore(
      appReducer,
      {},
      applyMiddleware(epicMiddleware)
    );

    ngRedux.provideStore(store);
    epicMiddleware.run(combineEpics(
      this.sampleEpicFactory.createLoadTracksEpic()
    ));
  }
}

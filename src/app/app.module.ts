import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TrackListModule } from './track-list/track-list.module';

import { AppComponent } from './app.component';
import { TrackListComponent } from './track-list/track-list.component';
import { GenreListComponent } from './genre-list/genre-list.component';
import {RouterModule} from '@angular/router';
import {TrackListEpicFactory} from './track-list/track-list.epic';
import {TrackListActions} from './track-list/track-list.action';
import {StateModule} from './state/state.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GenreListComponent
  ],
  imports: [
    BrowserModule,
    TrackListModule,
    StateModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'tracks', component: TrackListComponent},
      {path: 'genres', component: GenreListComponent},
    ])
  ],
  providers: [TrackListEpicFactory, TrackListActions],
  bootstrap: [AppComponent]
})
export class AppModule { }

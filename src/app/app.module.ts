import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TrackListComponent } from './track-list/track-list.component';
import { GenreListComponent } from './genre-list/genre-list.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    TrackListComponent,
    GenreListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'tracks', component: TrackListComponent},
      {path: 'genres', component: GenreListComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

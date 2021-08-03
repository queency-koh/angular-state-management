import { Component, VERSION } from '@angular/core';
import { Store } from './store';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts$ = this.store.select<any[]>('posts');

  constructor(private store: Store) {
    this.store.set('posts', [
      { id: 1, title: 'json-server', author: 'queencykoh' },
      { id: 2, title: 'ngrx', author: 'queencykoh' }
    ]);
  }
}

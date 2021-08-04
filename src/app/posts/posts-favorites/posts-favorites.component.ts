import { Component, OnInit } from '@angular/core';
import { Store } from '../../store';

@Component({
  selector: 'posts-favorites',
  templateUrl: './posts-favorites.component.html'
})
export class PostsFavorites implements OnInit {
  constructor(private store: Store) {}

  ngOnInit() {}
}

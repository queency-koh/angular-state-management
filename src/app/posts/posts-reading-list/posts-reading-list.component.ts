import { Component, OnInit } from '@angular/core';
import { Store } from '../../store';

@Component({
  selector: 'posts-reading-list',
  templateUrl: './posts-reading-list.component.html'
})
export class PostsReadingList implements OnInit {
  
  constructor(private store: Store) {}

  ngOnInit() {}
}

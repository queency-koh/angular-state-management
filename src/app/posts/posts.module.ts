import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PostsFavorites } from './posts-favorites/posts-favorites.component';

@NgModule({
  declarations: [PostsFavorites, PostsFavorites],
  imports: [CommonModule, HttpClientModule]
})
export class PostsModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Store } from './store';

import { AppComponent } from './app.component';
import { PostsModule } from './posts/posts.module';

@NgModule({
  imports: [BrowserModule, PostsModule],
  declarations: [AppComponent],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule {}

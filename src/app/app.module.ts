import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { allIcons, HeroIconModule } from 'ng-heroicon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroIconModule.forRoot({
      ...allIcons
    },
    {
      defaultHostDisplay: 'inlineBlock', // default 'none'
      attachDefaultDimensionsIfNoneFound: true // default 'false'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

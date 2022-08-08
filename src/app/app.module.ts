import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { allIcons, HeroIconModule } from 'ng-heroicon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DropMenuComponent } from './components/header/drop-menu/drop-menu.component';
import { MobileNavComponent } from './components/header/mobile-nav/mobile-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { SignatureComponent } from './template/signature/signature.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropMenuComponent,
    MobileNavComponent,
    SignatureComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroIconModule.forRoot({
      ...allIcons
    },
    {
      attachDefaultDimensionsIfNoneFound: true, // default 'false'
    }),
    BrowserAnimationsModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

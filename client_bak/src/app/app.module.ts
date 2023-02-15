import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BGGService } from './bgg.service';
import { DisplayComponent } from './display/display.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [AppComponent, DisplayComponent, SearchComponent],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
  providers: [BGGService],
  bootstrap: [AppComponent],
})
export class AppModule {}

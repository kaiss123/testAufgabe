import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdGridListModule} from '@angular/material';
import { MaterialModule } from '@angular/material';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { AppComponent } from './app.component';
import { ImgDetailsComponent } from '../components/img-details/img-details.component';
import { ImageService } from '../services/image.service';

@NgModule({
  declarations: [
    AppComponent,
    ImgDetailsComponent
  ],
  entryComponents: [ImgDetailsComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdGridListModule,
    MaterialModule,
    InfiniteScrollModule 
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

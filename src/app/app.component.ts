import { Component } from '@angular/core';
import { ImageService } from '../services/image.service';
import { ImgDetailsComponent } from '../components/img-details/img-details.component';
import { MdGridListModule, MdDialog, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ImageService]
})
export class AppComponent {
  title = 'Getty-Search';
  subtitle = 'Features: onEnter, endless Scrolling, LoadingProgressbar, Angular v2 Material, Grid/List Switch';
  results = new Array();
  searchTerm = 'Obama';
  selectedImg = {};
  isSearching = false;
  toggleSelector = false;
  page = 1;

  constructor(private ImageService: ImageService, public dialog: MdDialog) {
    this.performSearch();
  }

  performSearch() {
    this.isSearching = true;
    this.ImageService.search(this.searchTerm, this.page)
      .subscribe(results => {
        if (this.results.length === 0) {
          this.results = results.images;
        } else {
          this.results = this.results.concat(results.images);
        }
        this.isSearching = false;
      });
  }

  onSelect(img): void {
    this.selectedImg = img;
    let dialogRef = this.dialog.open(ImgDetailsComponent, {
      data: img,
      //height: (img.max_dimensions.height / 7).toString() + 'px',
      //width: (img.max_dimensions.width / 7 * 1.3).toString() + 'px',
      height: '660px',
      width: '770px',
    });
  }
  onSearch() {
    this.resetUi();
    this.performSearch();
  }
  onScroll() {
    this.page++;
    this.performSearch();
  }
  resetUi() {
    this.selectedImg = undefined;
    this.results = [];
    this.page = 1;
  }
}
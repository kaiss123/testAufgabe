import { Component, Inject } from '@angular/core';
import { MD_DIALOG_DATA } from '@angular/material';
import { MdGridListModule } from '@angular/material';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-img-details',
  templateUrl: './img-details.component.html',
  styleUrls: ['./img-details.component.css'],
  providers: [ImageService]
})
export class ImgDetailsComponent {
  constructor( @Inject(MD_DIALOG_DATA) private data: any, private ImageService: ImageService) {
    //injected data into this.data
    this.getImgDetail();
  }
  getImgDetail() {
    this.ImageService.getMetaData(this.data.id)
      .subscribe(results => {
        this.data = results.images[0];
      });
  }
}

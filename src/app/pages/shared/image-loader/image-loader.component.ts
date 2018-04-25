import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-image-loader',
  templateUrl: './image-loader.component.html',
  styleUrls: ['./image-loader.component.scss']
})
export class ImageLoaderComponent implements OnInit {

  @Input() imageUrl: string;
  private loaded: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  private imageLoad() {
    this.loaded = true;
  }
}

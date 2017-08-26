import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-section',
  templateUrl: './image-section.component.html',
  styleUrls: ['./image-section.component.scss']
})
export class ImageSectionComponent implements OnInit {

  // todo: pass in folder url instead, service to serve all images per folder?
  @Input() imageUrl: string = "";
  @Input() imageAlt: string = "";
  @Input() imageTitle: string = "";

  constructor() { }

  ngOnInit() {
  }

}

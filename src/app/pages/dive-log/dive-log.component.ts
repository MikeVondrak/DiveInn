import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FlickrService } from '../../services/flickr.service';
import { PhotoService } from '../../services/photo.service';
import { FlickrPhotoSet, FlickrPhotoSetList } from '../../models/flickr-photoSet.model';

@Component({
  selector: 'app-dive-log',
  templateUrl: './dive-log.component.html',
  styleUrls: ['./dive-log.component.scss']
})
export class DiveLogComponent implements OnInit, OnDestroy {

  private flickrPhotoSets: FlickrPhotoSet[];
  private flickrPhotoSetList: Observable<FlickrPhotoSetList>;

  constructor(private flickrService: FlickrService, private photoService: PhotoService) { }

  ngOnInit() {
    console.log("dive-log.component OnInit: GETTING PHOTO SETS");
    
    //this.flickrPhotoSets = this.flickrService.getFlickrPhotoSets();
    //this.flickrPhotoSetList = this.flickrService.getFlickrPhotoSetList();

    // need to subscribe in component instead of service?
    //this.photoService.getSightingsPhotoSetList();
  }

  ngOnDestroy() {
    // unsubscribe from observable
    // obs.unsubscribe();
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

//import { PhotoService } from '../../../services/photo.service';
import { FlickrService } from '../../../services/flickr.service';
import { FlickrPhotoSet } from '../../../models/flickr.model';

@Component({
  selector: 'app-photo-album',
  templateUrl: './photo-album.component.html',
  styleUrls: ['./photo-album.component.scss']
})
export class PhotoAlbumComponent implements OnInit {

  @Input() flickrPhotoSetId: string;
  //@Input() flickrphotosetid: string;

  private photoSetObs: Observable<FlickrPhotoSet>;
  public photoSet: FlickrPhotoSet = new FlickrPhotoSet();

  constructor(private flickrService: FlickrService) { }

  ngOnInit() {
    console.log('photo-album.component.ngOnInit');
    this.photoSetObs = this.flickrService.getFlickrPhotoSet(this.flickrPhotoSetId);
    //this.photoSetObs = this.flickrService.getFlickrPhotoSet(this.flickrphotosetid);
    this.photoSetObs.subscribe(
      data => this.photoSetData(data),
      error => this.handleError(error),
      () => this.photoSetComplete()
    );
  }

  private photoSetData(data: FlickrPhotoSet) {
    console.log('photo-album.component.photoSetData', data);
    //debugger;
    this.photoSet = data;
  }

  private photoSetComplete() {
    console.log('photo-album.component.photoSetComplete');
  }

  private handleError(error: Response | any) {
    console.log(error.message || error);
    
    return Observable.throw(error.message || error);
  }

}

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import { AlbumList } from '../models/photo.model';
import { FlickrService } from '../services/flickr.service';

import { FlickrPhotoSetList, FlickrPhotoSetListItem, FlickrPhotoSet, FlickrPhoto } from '../models/flickr.model';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class FauxtoService {

  private photoAlbumSubject: ReplaySubject<AlbumList> = new ReplaySubject<AlbumList>();

  constructor(private http: Http) { }

  private blah(): void {
    let httpResponseObs: Observable<Response> = this.http.get("string");
  }

}

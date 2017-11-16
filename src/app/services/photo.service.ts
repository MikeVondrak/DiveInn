import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';   // use promise to only get data on initial load?
import { PhotoSetList } from '../models/photo.model';
import { FlickrService } from '../services/flickr.service';

import { FlickrPhotoSet, FlickrPhotoSetList } from '../models/flickr-photoSet.model';

@Injectable()
export class PhotoService {

  private flickrPhotoSetListObs: Observable<FlickrPhotoSetList>;

  // list of Flickr photo sets that exist in the Sightings (gallery) page
  sightingsPhotoSetObs: Observable<PhotoSetList>;

  sightingsPhotoSetList: PhotoSetList;
  archivesPhotoSetList: PhotoSetList;

  constructor(private http: Http, private flickrService: FlickrService) {
    console.log("photo.service.constructor");   // OnInit only for Directives and Components

    // first get list of photo set ids that belong in Sightings page sections
    // setTimeout( () => {   // es6 syntax for anonymous function that inherits 'this'
    //   this.getSightingsPhotoSetList();
    // }, 1000);
    // setTimeout( function() {  // func.prototype.bind
    //   this.getSightingsPhotoSetList();
    // }.bind(this), 1000);
    this.getSightingsPhotoSetList();
  }


  public getSightingsPhotoSetList() {
    // todo: pull from DB once set up
    var requestStr: string = "assets/tempData/sightings-photoSets.json";
    this.sightingsPhotoSetObs = this.http.get(requestStr).map((res: Response) => res.json());

    this.sightingsPhotoSetObs.subscribe(
      data => this.sightingsPhotoSetListData(data), 
      error => this.handleErrorObservable(error),
      () => this.sightingsPhotoSetListComplete()
    );
  }
  private sightingsPhotoSetListData(data: PhotoSetList) {
    this.sightingsPhotoSetList = data;
    console.log("photo.service.sightingsPhotoSetListData: ", data, " list: ", this.sightingsPhotoSetList.photoSets);
  }
  private sightingsPhotoSetListComplete() {
    console.log("photo.service: sightingsPhotoSetListComplete");

    // after Sightings list it populated get all Flickr photo sets and determine where they live
    this.getFlickrPhotoSetList();
  }

  private getFlickrPhotoSetList() {
    this.flickrPhotoSetListObs = this.flickrService.getFlickrPhotoSetList();
    this.flickrPhotoSetListObs.subscribe(
      data => this.flickrPhotoSetListData(data),
      error => this.handleErrorObservable(error),
      () => this.flickrPhotoSetListComplete()
    );
  }
  // determine whether Flickr photo set belongs in Event Archives or Sightings
  private flickrPhotoSetListData(flickrPhotoSetList: FlickrPhotoSetList) {
    console.log("photo.service.flickrPhotoSetListData: flickrPhotoSetList = ", flickrPhotoSetList, "flickrPhotoSetList.photoSets = ", flickrPhotoSetList.photosets);
    let flickrInSightings = flickrPhotoSetList.photosets.photoset.filter(ps => this.isSightingsPhotoSet(ps.id));
    console.log("photo.service: flickrPhotoSetListData flickrInSightings ", flickrInSightings);
  }
  private flickrPhotoSetListComplete() {
    console.log("photo.service: flickrPhotoSetListComplete");
  }

  private isSightingsPhotoSet(photoSetId: string): boolean {
    if(this.sightingsPhotoSetList.photoSets.find(el => el.id === photoSetId)) {
      return true;
    }
    return false;
  }
  

  // todo: common error handling for http observables?
  private handleErrorObservable(error: Response | any) {
    console.log(error.message || error);
    return Observable.throw(error.message || error);
  }

  // get flickr photo sets
  //  get photoset cover photo (primary)? multiple photos?
  //    sightings - use photoSet.getPhotos and display all
  //    archives - use 
  //    Photo Source URLs
  //    You can construct the source URL to a photo once you know its ID, server ID, farm ID and secret, as returned by many API methods.
  //    The URL takes the following format:
  //      https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
  //      https://farm5.staticflickr.com/4490/24317506068_de768827d3_m.jpg
	//      https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_[mstzb].jpg
	//      https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{o-secret}_o.(jpg|gif|png)
  // get sightings photo sets
  // sort flickr into sightings / archives
  // 


}

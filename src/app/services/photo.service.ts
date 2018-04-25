import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';   // todo: use promise to only get data on initial load?
                                        // todo: Subject or BehaviourSubject?
import { AlbumList } from '../models/photo.model';
import { FlickrService } from '../services/flickr.service';

import { FlickrPhotoSetList, FlickrPhotoSetListItem, FlickrPhotoSet, FlickrPhoto } from '../models/flickr.model';

@Injectable()
export class PhotoService {

  // list of Flickr photo sets that exist in the Sightings (gallery) page (Flickr photo set is equivalent to an album)
  private sightingsAlbumObs: Observable<AlbumList>;
  private sightingsAlbumList: AlbumList;
  //private archivesAlbumList: AlbumList;
  private readonly sightingsAlbumPath: string = "assets/tempData/sightings-albums.json";

  private flickrPhotoSetListObs: Observable<FlickrPhotoSetList>;
  private flickrPhotoSetList: FlickrPhotoSetList;   // list of all photosets from flickr photosets.getList

  // determine whether Flickr photo set belongs in Event Archives or Sightings
  // for now any set not in Sightings goes into Archives (todo: track both with db and check visibility_can_see_set?)
  private sightingsPhotoSetObs: Observable<FlickrPhotoSet>;
  private sightingsPhotoSetArray: FlickrPhotoSet[] = new Array<FlickrPhotoSet>();
  private archivesPhotoSetObs: Observable<FlickrPhotoSet>;
  private archivesPhotoSetArray: FlickrPhotoSet[] = new Array<FlickrPhotoSet>();

  constructor(private http: Http, private flickrService: FlickrService) {
    console.log("photo.service.constructor");   // OnInit only for Directives and Components

    // first get list of photo set ids that belong in Sightings page sections
    // setTimeout( () => {   // es6 syntax for anonymous function that inherits 'this'
    //   this.getSightingsPhotoSetList();
    // }, 1000);
    // setTimeout( function() {  // func.prototype.bind
    //   this.getSightingsPhotoSetList();
    // }.bind(this), 1000);

    //this.getSightingsAlbumList();
  }

  private getSightingsAlbumList() {
    console.log("photo.service.getSightingsAlbumList");

    // todo: pull from DB once set up
    var requestStr: string = this.sightingsAlbumPath;
    this.sightingsAlbumObs = this.http.get(requestStr).map((res: Response) => res.json());

    this.sightingsAlbumObs.subscribe(
      data => this.sightingsAlbumListData(data), 
      error => this.handleErrorObservable(error),
      () => this.sightingsAlbumListComplete()
    );
  }
  private sightingsAlbumListData(data: AlbumList) {
    this.sightingsAlbumList = data;
    console.log("photo.service.sightingsAlbumListData: ", data, " list: ", this.sightingsAlbumList.albums);
  }
  private sightingsAlbumListComplete() {
    console.log("photo.service.sightingsPhotoSetListComplete");

    // after Sightings list it populated get all Flickr photo sets and determine where they live
    this.getFlickrPhotoSetList();
  }

  private getFlickrPhotoSetList() {
    console.log("photo.service.getFlickrPhotoSetList");

    this.flickrPhotoSetListObs = this.flickrService.getFlickrPhotoSetList();
    this.flickrPhotoSetListObs.subscribe(
      data => this.flickrPhotoSetListData(data),
      error => this.handleErrorObservable(error),
      () => this.flickrPhotoSetListComplete()
    );
  }
  private flickrPhotoSetListData(data: FlickrPhotoSetList) {
    this.flickrPhotoSetList = data;
    console.log("photo.service.flickrPhotoSetListData: flickrPhotoSetList = ", data, "flickrPhotoSetList.photoSets = ", data.photosets);
  }
  private flickrPhotoSetListComplete() {
    console.log("photo.service.flickrPhotoSetListComplete");

    //this.sightingsPhotoSetArray = this.flickrPhotoSetList.photosets.photoset.filter(ps => this.isSightingsPhotoSet(ps.id));
    //this.archivesPhotoSetArray = this.flickrPhotoSetList.photosets.photoset.filter(ps => !this.isSightingsPhotoSet(ps.id));
    this.populatePhotoSets();
  }
  private populatePhotoSets() {
    console.log("photo.service.populatePhotoSets");

    this.flickrPhotoSetList.photosets.photoset.forEach( (el: FlickrPhotoSetListItem) => { 
      let flickrPSObs = 
      this.sightingsPhotoSetObs = this.flickrService.getFlickrPhotoSet(el.id);
      this.sightingsPhotoSetObs.subscribe(
        data => this.flickrPhotoSetData(data),
        error => this.handleErrorObservable(error),
        () => this.flickrPhotoSetComplete()
      );
    });
  }
  private isSightingsPhotoSet(photoSetId: string): boolean {
    if(this.sightingsAlbumList.albums.find(el => el.id === photoSetId)) {
      return true;
    }
    return false;
  }
  private flickrPhotoSetData(data: FlickrPhotoSet) {
    data.photoset.photo.forEach((el: FlickrPhoto) => 
      this.populatePhotoUrl(el)
    );
    // todo: this is only safe because there is a single return value for flickr photoSet getPhotos
    if(this.isSightingsPhotoSet(data.photoset.id)) {
      this.sightingsPhotoSetArray.push(data);
    }
    else {
      this.archivesPhotoSetArray.push(data);
    }
  }
  private flickrPhotoSetComplete() {
    console.log("photo.service.flickrPhotoSetComplete: ");

    console.log("sightings: ", this.sightingsPhotoSetArray);
    console.log("archives: ", this.archivesPhotoSetArray);
  }

  private populatePhotoUrl(photo: FlickrPhoto): void {
    // https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
    // https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_[mstzb].jpg
    // https://farm5.staticflickr.com/4490/24317506068_de768827d3_m.jpg
    photo.url = "https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + ".jpg"; // + "_m.jpg"
  }

  // todo: common error handling for http observables?
  private handleErrorObservable(error: Response | any) {
    console.log(error.message || error);
    
    return Observable.throw(error.message || error);
  }

  ////////////////////////////////////////////////////////////////////////
  // public methods to provide data to Dive Log and Sightings components

  // after sorting sightings / archives albums
  //  populate photo models w/photoSet.getPhotos(api key, photoset id, user id)
  //    paging for results? max of 500 per page
  //    need to check privacy filter?
  //  two new components
  //    photoGallery displays all photos (paged?) - able to open 'fullscreen' and see pages w/back/next/etc
  //    photoArchive displays primary photo/title/desc and links into Flickr - flickr.urls.lookupGallery

  // Sightings albums are pulled into specific sections
  // need to return photo model with photoset id/title/description/farmId and photo list w/serverId, photoId, and secret (+options for size)
  // for now render the entire album inside the specific Sightings container (Dive Inside, Dive Abroad, Gone Fishin, Bumper Stickers)
  public getSightingsPhotoSet(id: string): FlickrPhotoSet {
    let phset: FlickrPhotoSet;
    return phset;
  }
  // Achives albums are loaded into a single section based on date (most recent at top)
  // need to return array of archive photo model 
  public getArchivesPhotoSets(): FlickrPhotoSet[] {
    let phset: FlickrPhotoSet[];
    return phset;
  }

  // get flickr photo sets
  //  get photoset cover photo (primary)? multiple photos?
  //    sightings - use photoSet.getPhotos and display all
  //    archives - use 

  //    https://www.flickr.com/services/api/misc.urls.html
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

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';   // use promise to only get data on initial load?

import { FlickrPhotoSetList, FlickrPhotoSet, FlickrPhoto } from 'app/models/flickr.model';


// Flickr API key
// Key:     1c8905911d5dae33918e78c1c00c5535
// Secret:  e962169ccaeb46e2
// User ID: 50435036@N08

@Injectable()
export class FlickrService {

  static readonly flickrBaseUrl: string = "https://api.flickr.com/services/rest/?method=";
  static readonly flickrApiKey: string = "api_key=1c8905911d5dae33918e78c1c00c5535";
  static readonly flickrSecret: string = "e962169ccaeb46e2";
  static readonly flickrUserId: string = "user_id=50435036@N08";
  static readonly flickrResponseFormatJson: string = "format=json&nojsoncallback=1";
  
  static readonly flickrGetPhotoSetList: string = "flickr.photosets.getList";
  static readonly flickrGetPhotos: string = "flickr.photosets.getPhotos";


  // todo: move this to spec for testing
  //static readonly flickrBadBaseUrl: string = "https://api.flickr.com/services/rest/?mathed=";
  //static readonly flickrBadApiKey: string = "api_key=1c8905911d5dae00000000000000";
  //static readonly flickrBadUserId: string = "user_id=50435036@MOO";
  //static readonly flickrBadResponseFormatJson: string = "format=jsan&nojsoncallback=1";
  //static readonly flickrBadGetPhotoSetList: string = "flickr.phutusats.getLust";

  //sightingsPhotoSets: FlickrPhotoSetList;
  //archivePhotoSets: FlickrPhotoSetList;

  constructor(private http: Http) { }
 
  // https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key={api_key}&user_id={user_id}&format=json&nojsoncallback=1
  public getFlickrPhotoSetList() : Observable<FlickrPhotoSetList> {
    console.log('flickr.service.getFlickrPhotoSetList');
    var ret: Observable<FlickrPhotoSetList>;
    //var requestStr = this.getRequestString(FlickrService.flickrGetPhotoSetList);
    var requestStr = FlickrService.flickrBaseUrl + FlickrService.flickrGetPhotoSetList + 
                      '&' + FlickrService.flickrApiKey + '&' + FlickrService.flickrUserId + '&' + FlickrService.flickrResponseFormatJson;
    
    ret = this.http.get(requestStr)
                    .map((res: Response) =>  res.json())
                    .catch(this.handleErrorObservable);
    
    // debug
    //ret.subscribe(data => {console.log("flickr.service.getFlickrPhotoSetList: ", data)}, error => console.log(error));

    return ret;
  }

  // https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key={api_key}&photoset_id={photoset_id}&user_id={user_id}&format=json&nojsoncallback=1
  public getFlickrPhotoSet(flickrPhotoSetId: string): Observable<FlickrPhotoSet> {
    console.log('flickr.service.getFlickrPhotoSet id=', flickrPhotoSetId);
    var ret: Observable<FlickrPhotoSet>;
    var requestStr = FlickrService.flickrBaseUrl + FlickrService.flickrGetPhotos + 
                      '&' + FlickrService.flickrApiKey + '&' + "photoset_id=" + flickrPhotoSetId + '&' + FlickrService.flickrUserId + '&' + FlickrService.flickrResponseFormatJson;

    console.log('flickr.service.getFlickrPhotoSet requestStr=', requestStr);
    ret = this.http.get(requestStr)
                    .map((res: Response) =>  { 
                      let resJson = res.json();
                      resJson.photoset.photo.forEach(el => {
                        this.populatePhotoUrl(el);
                      });
                      return resJson })
                    .catch(this.handleErrorObservable);

    return ret;
  }

  public populatePhotoUrl(photo: FlickrPhoto): void {
    console.log('flickr.service.populatePhotoUrl');
    // https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
    // https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_[mstzb].jpg
    // https://farm5.staticflickr.com/4490/24317506068_de768827d3_m.jpg
    photo.url = "https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_m.jpg"; // + "_m.jpg"
  }


  private getRequestString(apiStr: string): string {
    console.log('flickr.service.getRequestString');
    let requestStr = FlickrService.flickrBaseUrl + apiStr + '&' + FlickrService.flickrApiKey + '&' + FlickrService.flickrUserId + '&' + FlickrService.flickrResponseFormatJson;
    return requestStr;

    // todo: move this to spec for testing
    //var requestStr = FlickrService.flickrBadBaseUrl + FlickrService.flickrGetPhotoSetList + '&' + FlickrService.flickrApiKey + '&' + FlickrService.flickrUserId + '&' + FlickrService.flickrResponseFormatJson;
    //var requestStr = FlickrService.flickrBaseUrl + FlickrService.flickrBadGetPhotoSetList + '&' + FlickrService.flickrApiKey + '&' + FlickrService.flickrUserId + '&' + FlickrService.flickrResponseFormatJson;
    //var requestStr = FlickrService.flickrBaseUrl + FlickrService.flickrGetPhotoSetList + '&' + FlickrService.flickrBadApiKey + '&' + FlickrService.flickrUserId + '&' + FlickrService.flickrResponseFormatJson;
    //var requestStr = FlickrService.flickrBaseUrl + FlickrService.flickrGetPhotoSetList + '&' + FlickrService.flickrApiKey + '&' + FlickrService.flickrBadUserId + '&' + FlickrService.flickrResponseFormatJson;
    
    // todo: not caught by observable error, how best to handle?
    // No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:4200' is therefore not allowed access.
    //var requestStr = FlickrService.flickrBaseUrl + FlickrService.flickrGetPhotoSetList + '&' + FlickrService.flickrApiKey + '&' + FlickrService.flickrUserId + '&' + FlickrService.flickrBadResponseFormatJson;
  }

  private handleErrorObservable(error: Response | any) {
    console.log(error.message || error);
    return Observable.throw(error.message || error || "flickr.service.getFlickrPhotoSetList failed - no error data");
  }





  // public getFlickrPhotoSets(): FlickrPhotoSet[] {
  //   var ret: FlickrPhotoSet[] = [];
  //   var requestStr = FlickrService.flickrBaseUrl + FlickrService.flickrGetPhotoSetList + '&' + FlickrService.flickrApiKey + '&' + FlickrService.flickrUserId + '&' + FlickrService.flickrResponseFormatJson;

  //   console.log(requestStr);
  //   //  https://www.flickr.com/services/api/explore/flickr.photosets.getList
  //   //  https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=c64f0000ae86a1e50a64acb69df6036c&user_id=50435036%40N08&format=json&nojsoncallback=1
    
  //   //var fsc: FlickrStringContent = { _content: "title" };
    
  //   var a = { id: "1", primary: "2", secret: "3", server: "4", farm: 5, numPhotos: 6, title: {_content: "title"}, description: {_content: "desc"} } as FlickrPhotoSet;
  //   //var a = { id: 1, primary: 2, secret: 3, server: 4, farm: 5, numPhotos: 6, title: fsc, description: fsc } as FlickrPhotoSet;
  //   ret.push(a);

  //   var b = { page: 1, pages: 2, perPage: 3, total: 4, photoSets: ret };
  //   var fpsl: FlickrPhotoSetList = b;
    
  //   console.log("Photo Sets: ", a, "List: ", b);

  //   return ret;
  // }



}

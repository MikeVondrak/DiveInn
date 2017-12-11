//  The URL takes the following format:
//      https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
//      https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_[mstzb].jpg
//      https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{o-secret}_o.(jpg|gif|png)

//      https://farm5.staticflickr.com/4490/24317506068_de768827d3_m.jpg

// flickr.photosets.getPhotos
export interface FlickrPhoto {
    id: string;
    secret: string;
    server: string;
    farm: number;
    title: string;
    isprimary: string;
    ispublic: number;
    isfriend: number;
    isfamily: number;

    // added properties
    url: string;
}
// flickr.photosets.getPhotos - root object
export class FlickrPhotoSet {
    photoset: {
        id: string;
        primary: string;
        owner: string;
        ownername: string;
        photo: FlickrPhoto[];
        page: number;
        per_page: number;
        perpage: number;
        pages: number;
        total: string;
        title: string;
    }

    constructor() {
        this.photoset = {
            id: "",
            primary: "",
            owner: "",
            ownername: "",
            photo: [],
            page: 0,
            per_page: 0,
            perpage: 0,
            pages: 0,
            total: "",
            title: ""
        }
    }
}

// export class FlickrStringContent {
//     _content: string;
// }

// flickr.photosets.getList
export interface FlickrPhotoSetListItem {
    id: string;
    primary: string;
    secret: string;
    server: string;
    farm: number;
    photos: number;
    videos: number;
    
    title: { _content: string; };
    description: { _content:  string; };
    //title: FlickrStringContent;
    //description: FlickrStringContent;

    needs_intersitial: number;
    visibility_can_see_set: number;
    count_views: string;
    count_comments: string;
    can_comment: number;
    date_create: string;
    date_update: string;
}

// flickr.photosets.getList - root object
export interface FlickrPhotoSetList {
    photosets : {
        page: number;
        pages: number;
        perpage: number;
        total: number;
        photoset: FlickrPhotoSetListItem[];
    }
}

// export class FlickrStringContent {
//     _content: string;
// }

export interface FlickrPhotoSet {
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

export interface FlickrPhotoSetList {
    photosets : {
        page: number;
        pages: number;
        perpage: number;
        total: number;
        photoset: FlickrPhotoSet[];
    }
}

export interface Album { 
    id: string;
    name: string;
}
export interface AlbumList {
    albums: Album[];
}

export interface Photo {
    id: string;
    secret: string;
}
export interface PhotoAlbum {
    id: string;
    title: string;
    description: string;
    farmId: number;
    numPhotos: number;
    dateCreated: string;
    photos: Photo[];
}

// need to return photo model with photoset id/title/description/farmId and photo list w/serverId, photoId, and secret (+options for size)
// You can construct the source URL to a photo once you know its ID, server ID, farm ID and secret, as returned by many API methods.
//    The URL takes the following format:
//      https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
//      https://farm5.staticflickr.com/4490/24317506068_de768827d3_m.jpg
  //      https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_[mstzb].jpg
  //      https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{o-secret}_o.(jpg|gif|png)


// class PhotoSetClass implements PhotoSet {
//     id: string;
//     name: string;

//     constructor(newId: string, newName: string) {
//         this.id = newId;
//         this.name = newName;
//     }
// }
export interface PhotoSet { 
    id: string;
    name: string;
}
export interface PhotoSetList {
    photoSets: PhotoSet[];
}


// class PhotoSetClass implements PhotoSet {
//     id: string;
//     name: string;

//     constructor(newId: string, newName: string) {
//         this.id = newId;
//         this.name = newName;
//     }
// }
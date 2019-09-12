// export interface Attractions {
//   nameAttractions: string;
//   detail: string;
// }

export interface Attractions {
  name: string;
  place: Place[];
}

export interface Place {
  name: string;
  detail: string;
}

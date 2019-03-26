import {Artist} from "./Artist";
import {Album} from "./Album";

export class Track {

  constructor(public id?: string,
              public readable?: boolean,
              public title?: string,
              public title_short?: string,
              public title_version?: string,
              public isrc?: string,
              public link?: string,
              public duration?: string,
              public track_position?: number,
              public disk_number?: number,
              public rank?: string,
              public explicit_lyrics?: boolean,
              public explicit_content_lyrics?: number,
              public explicit_content_cover?: number,
              public preview?: string,
              public artist?: Artist,
              public type?: string,
              public album?: Album) {

  }


}

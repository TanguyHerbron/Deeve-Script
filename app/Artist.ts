export class Artist {

    constructor (public id: string,
                 public name: string,
                 public link: string,
                 public picture: string,
                 public picture_small: string,
                 public picture_medium: string,
                 public picture_big: string,
                 public picture_xl: string,
                 public tracklist: string,
                 public type: string,
                 public radio?: boolean,
                 public position?: number) {}
}

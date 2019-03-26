import {Album} from "~/Album";
import {Artist} from "~/Artist";

export class SearchResult {

    constructor (public id: number,
                 public title: string,
                 public preview: string,
                 public artist: Artist,
                 public album: Album) {}

}

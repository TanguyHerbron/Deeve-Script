import { Component, OnInit } from "@angular/core";
import { SearchResult } from "~/SearchResult";
import {Album} from "~/Album";
import {Artist} from "~/Artist";
import {SearchBar} from "tns-core-modules/ui/search-bar";
import {ActivatedRoute, Router} from "@angular/router";
import {TNSPlayer} from "nativescript-audio-player";
import {fromFile, ImageSource} from "tns-core-modules/image-source";
import {Page} from "tns-core-modules/ui/page";
import {ad} from "tns-core-modules/utils/utils";
import dismissSoftInput = ad.dismissSoftInput;
import {Track} from "~/Track";
import {Location} from "@angular/common";

@Component({
    selector: "app-home",
    moduleId: module.id,
    templateUrl: "./details.component.html",
    styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
    private player: TNSPlayer;
    private albumResults: Array<Album>;
    private tracks: Array<Track>;
    private playerInit: boolean = false;
    private displayed: any;

    private displayedTrack: Track;

    constructor(private page: Page, private route: ActivatedRoute, private location: Location) {
        this.page.actionBarHidden = true;
        dismissSoftInput();
        this.route.queryParams.subscribe(params => {

            this.displayed = params;
            this.displayedTrack = new Track();
            this.displayedTrack.title = params['title'];
            this.displayedTrack.artist = new Artist();
            this.displayedTrack.artist.name = params['artist'];
            this.displayedTrack.preview = params['preview'];

            var http = require("http");

            http.getJSON("https://api.deezer.com/album/" + this.displayed['albumId'])
                .then(str => {

                    this.tracks = new Array<Track>();

                    for(var i = 0; i < str.tracks.data.length; i++)
                    {
                        let track: Track = str.tracks.data[i];
                        track.duration = this.time_formater(track.duration);
                        this.tracks.push(track);
                    }
                })
        });

        this.player = new TNSPlayer();
    }

    ngOnInit(): void {
    }

    goBack() {
        this.location.back();
    }

    onTap($event) {
        if (this.player.isAudioPlaying()) {
            this.player.pause();
        } else {
            if(!this.playerInit)
            {
                this.player.initFromUrl({
                    audioFile: this.displayedTrack.preview,
                    loop: false
                }).then(() => {
                    this.playerInit = true;
                    this.player.play();
                });
            }
            this.player.play();
        }
    }

    ngOnDestroy() {
        if(this.player.isAudioPlaying())
        {
            this.player.pause();
        }
    }

    onItemTap(event){

        this.displayedTrack.title = this.tracks[event.index].title;
        this.displayedTrack.preview = this.tracks[event.index].preview;
        this.displayedTrack.artist.name = this.tracks[event.index].artist.name;

        this.player.initFromUrl({
            audioFile: this.displayedTrack.preview,
            loop: false
        }).then(() => {
            this.playerInit = true;
            this.player.play();
        });
    }

    time_formater(_seconds) {
        if (typeof _seconds !== "number" || _seconds < 0)
            return "--";

        var hours = Math.floor(_seconds / 3600),
            minutes = Math.floor((_seconds % 3600) / 60),
            seconds = Math.floor(_seconds % 60);

        if(this.padTime(hours) != "00")
        {
            return this.padTime(hours) + ":" + this.padTime(minutes) + ":" + this.padTime(seconds);
        }

        return this.padTime(minutes) + ":" + this.padTime(seconds);
    };

    padTime(t) {
        return t < 10 ? "0"+t : t;
    }
}

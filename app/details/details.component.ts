import { Component, OnInit } from "@angular/core";
import { SearchResult } from "~/SearchResult";
import {Album} from "~/Album";
import {Artist} from "~/Artist";
import {SearchBar} from "tns-core-modules/ui/search-bar";
import {ActivatedRoute} from "@angular/router";
import {TNSPlayer} from "nativescript-audio-player";
import {fromFile, ImageSource} from "tns-core-modules/image-source";
import {Page} from "tns-core-modules/ui/page";
import {ad} from "tns-core-modules/utils/utils";
import dismissSoftInput = ad.dismissSoftInput;

@Component({
    selector: "app-home",
    moduleId: module.id,
    templateUrl: "./details.component.html",
    styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
    private player: TNSPlayer;
    private albumResults: Array<Album>;
    private playerInit: boolean = false;
    private result: any;

    constructor(private page: Page, private route: ActivatedRoute) {
        this.page.actionBarHidden = true;
        dismissSoftInput();
        this.route.queryParams.subscribe(params => {

            this.result = params;

            var http = require("http");

            http.getJSON("https://api.deezer.com/artist/" + this.result['artistId'] + "/albums")
                .then(str => {
                    this.albumResults = new Array<Album>();

                    console.log(">> " + str.toString());
                    console.log(">> " + str.data);

                    for(var i = 0; i < str.data.length; i++)
                    {
                        this.albumResults.push(str.data[i]);
                    }
                })
        });

        this.player = new TNSPlayer();
    }

    ngOnInit(): void {

    }

    onTap($event) {
        if (this.player.isAudioPlaying()) {
            this.player.pause();
        } else {
            if(!this.playerInit)
            {
                this.player.initFromUrl({
                    audioFile: this.result['preview'],
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
}

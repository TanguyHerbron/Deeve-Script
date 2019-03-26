import { Component, OnInit } from "@angular/core";
import { SearchResult } from "~/SearchResult";
import {Album} from "~/Album";
import {Artist} from "~/Artist";
import {SearchBar} from "tns-core-modules/ui/search-bar";
import {NavigationExtras, Router} from "@angular/router";
import {Page} from "tns-core-modules/ui/page";
import {BottomNavigationTab, OnTabPressedEventData, OnTabSelectedEventData} from "nativescript-bottom-navigation";
import {ObservableArray} from "tns-core-modules/data/observable-array";
import {Observable} from "tns-core-modules/data/observable";

@Component({
    selector: "app-home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
export class HomeComponent extends Observable implements OnInit {
    public searchResults: Array<SearchResult>;
    public searchPhrase: string;

    constructor(private page: Page, private router: Router) {
        super();
        this.page.actionBarHidden = true;
    }

    ngOnInit(): void {
    }

    public onSubmit(args) {
        let searchBar = <SearchBar>args.object;
        this.refreshList(searchBar.text);
    }

    refreshList(args: string) {
        var http = require("http");

        http.getJSON("https://api.deezer.com/search?q=" + args)
            .then(str => {
                this.searchResults = new Array<SearchResult>();

                for(var i = 0; i < str.data.length; i++)
                {
                    this.searchResults.push(str.data[i]);
                }
            })
    }

    onItemTap(event) {
        let navigationExtras: NavigationExtras = {
            queryParams: {
                "cover": this.searchResults[event.index].album.cover_medium,
                "artist": this.searchResults[event.index].artist.name,
                "title": this.searchResults[event.index].title,
                "artistId": this.searchResults[event.index].artist.id,
                "preview": this.searchResults[event.index].preview,
                "albumId": this.searchResults[event.index].album.id
            }
        };

        this.router.navigate(["/details"], navigationExtras);
    }
}

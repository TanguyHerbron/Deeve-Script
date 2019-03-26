"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Artist_1 = require("~/Artist");
var router_1 = require("@angular/router");
var nativescript_audio_player_1 = require("nativescript-audio-player");
var page_1 = require("tns-core-modules/ui/page");
var utils_1 = require("tns-core-modules/utils/utils");
var dismissSoftInput = utils_1.ad.dismissSoftInput;
var Track_1 = require("~/Track");
var common_1 = require("@angular/common");
var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(page, route, location) {
        var _this = this;
        this.page = page;
        this.route = route;
        this.location = location;
        this.playerInit = false;
        this.page.actionBarHidden = true;
        dismissSoftInput();
        this.route.queryParams.subscribe(function (params) {
            _this.displayed = params;
            _this.displayedTrack = new Track_1.Track();
            _this.displayedTrack.title = params['title'];
            _this.displayedTrack.artist = new Artist_1.Artist();
            _this.displayedTrack.artist.name = params['artist'];
            _this.displayedTrack.preview = params['preview'];
            var http = require("http");
            http.getJSON("https://api.deezer.com/album/" + _this.displayed['albumId'])
                .then(function (str) {
                _this.tracks = new Array();
                for (var i = 0; i < str.tracks.data.length; i++) {
                    var track = str.tracks.data[i];
                    track.duration = _this.time_formater(track.duration);
                    _this.tracks.push(track);
                }
            });
        });
        this.player = new nativescript_audio_player_1.TNSPlayer();
    }
    DetailsComponent.prototype.ngOnInit = function () {
    };
    DetailsComponent.prototype.goBack = function () {
        this.location.back();
    };
    DetailsComponent.prototype.onTap = function ($event) {
        var _this = this;
        if (this.player.isAudioPlaying()) {
            this.player.pause();
        }
        else {
            if (!this.playerInit) {
                this.player.initFromUrl({
                    audioFile: this.displayedTrack.preview,
                    loop: false
                }).then(function () {
                    _this.playerInit = true;
                    _this.player.play();
                });
            }
            this.player.play();
        }
    };
    DetailsComponent.prototype.ngOnDestroy = function () {
        if (this.player.isAudioPlaying()) {
            this.player.pause();
        }
    };
    DetailsComponent.prototype.onItemTap = function (event) {
        var _this = this;
        this.displayedTrack.title = this.tracks[event.index].title;
        this.displayedTrack.preview = this.tracks[event.index].preview;
        this.displayedTrack.artist.name = this.tracks[event.index].artist.name;
        this.player.initFromUrl({
            audioFile: this.displayedTrack.preview,
            loop: false
        }).then(function () {
            _this.playerInit = true;
            _this.player.play();
        });
    };
    DetailsComponent.prototype.time_formater = function (_seconds) {
        if (typeof _seconds !== "number" || _seconds < 0)
            return "--";
        var hours = Math.floor(_seconds / 3600), minutes = Math.floor((_seconds % 3600) / 60), seconds = Math.floor(_seconds % 60);
        if (this.padTime(hours) != "00") {
            return this.padTime(hours) + ":" + this.padTime(minutes) + ":" + this.padTime(seconds);
        }
        return this.padTime(minutes) + ":" + this.padTime(seconds);
    };
    ;
    DetailsComponent.prototype.padTime = function (t) {
        return t < 10 ? "0" + t : t;
    };
    DetailsComponent = __decorate([
        core_1.Component({
            selector: "app-home",
            moduleId: module.id,
            templateUrl: "./details.component.html",
            styleUrls: ['./details.component.css']
        }),
        __metadata("design:paramtypes", [page_1.Page, router_1.ActivatedRoute, common_1.Location])
    ], DetailsComponent);
    return DetailsComponent;
}());
exports.DetailsComponent = DetailsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkZXRhaWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUdsRCxtQ0FBZ0M7QUFFaEMsMENBQXVEO0FBQ3ZELHVFQUFvRDtBQUVwRCxpREFBOEM7QUFDOUMsc0RBQWdEO0FBQ2hELElBQU8sZ0JBQWdCLEdBQUcsVUFBRSxDQUFDLGdCQUFnQixDQUFDO0FBQzlDLGlDQUE4QjtBQUM5QiwwQ0FBeUM7QUFRekM7SUFTSSwwQkFBb0IsSUFBVSxFQUFVLEtBQXFCLEVBQVUsUUFBa0I7UUFBekYsaUJBNkJDO1FBN0JtQixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBTGpGLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFNaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLGdCQUFnQixFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUVuQyxLQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztZQUN4QixLQUFJLENBQUMsY0FBYyxHQUFHLElBQUksYUFBSyxFQUFFLENBQUM7WUFDbEMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzVDLEtBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLElBQUksZUFBTSxFQUFFLENBQUM7WUFDMUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNuRCxLQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7WUFFaEQsSUFBSSxJQUFJ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QixpQkFBUTtPQVRoRixnQkFBZ0IsQ0EwRzVCO0lBQUQsdUJBQUM7Q0FBQSxBQTFHRCxJQTBHQztBQTFHWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFNlYXJjaFJlc3VsdCB9IGZyb20gXCJ+L1NlYXJjaFJlc3VsdFwiO1xyXG5pbXBvcnQge0FsYnVtfSBmcm9tIFwifi9BbGJ1bVwiO1xyXG5pbXBvcnQge0FydGlzdH0gZnJvbSBcIn4vQXJ0aXN0XCI7XHJcbmltcG9ydCB7U2VhcmNoQmFyfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zZWFyY2gtYmFyXCI7XHJcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIFJvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge1ROU1BsYXllcn0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hdWRpby1wbGF5ZXJcIjtcclxuaW1wb3J0IHtmcm9tRmlsZSwgSW1hZ2VTb3VyY2V9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ltYWdlLXNvdXJjZVwiO1xyXG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcclxuaW1wb3J0IHthZH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdXRpbHMvdXRpbHNcIjtcclxuaW1wb3J0IGRpc21pc3NTb2Z0SW5wdXQgPSBhZC5kaXNtaXNzU29mdElucHV0O1xyXG5pbXBvcnQge1RyYWNrfSBmcm9tIFwifi9UcmFja1wiO1xyXG5pbXBvcnQge0xvY2F0aW9ufSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImFwcC1ob21lXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9kZXRhaWxzLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9kZXRhaWxzLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGV0YWlsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwcml2YXRlIHBsYXllcjogVE5TUGxheWVyO1xyXG4gICAgcHJpdmF0ZSBhbGJ1bVJlc3VsdHM6IEFycmF5PEFsYnVtPjtcclxuICAgIHByaXZhdGUgdHJhY2tzOiBBcnJheTxUcmFjaz47XHJcbiAgICBwcml2YXRlIHBsYXllckluaXQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgZGlzcGxheWVkOiBhbnk7XHJcblxyXG4gICAgcHJpdmF0ZSBkaXNwbGF5ZWRUcmFjazogVHJhY2s7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24pIHtcclxuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICBkaXNtaXNzU29mdElucHV0KCk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheWVkID0gcGFyYW1zO1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BsYXllZFRyYWNrID0gbmV3IFRyYWNrKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheWVkVHJhY2sudGl0bGUgPSBwYXJhbXNbJ3RpdGxlJ107XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheWVkVHJhY2suYXJ0aXN0ID0gbmV3IEFydGlzdCgpO1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BsYXllZFRyYWNrLmFydGlzdC5uYW1lID0gcGFyYW1zWydhcnRpc3QnXTtcclxuICAgICAgICAgICAgdGhpcy5kaXNwbGF5ZWRUcmFjay5wcmV2aWV3ID0gcGFyYW1zWydwcmV2aWV3J107XHJcblxyXG4gICAgICAgICAgICB2YXIgaHR0cCA9IHJlcXVpcmUoXCJodHRwXCIpO1xyXG5cclxuICAgICAgICAgICAgaHR0cC5nZXRKU09OKFwiaHR0cHM6Ly9hcGkuZGVlemVyLmNvbS9hbGJ1bS9cIiArIHRoaXMuZGlzcGxheWVkWydhbGJ1bUlkJ10pXHJcbiAgICAgICAgICAgICAgICAudGhlbihzdHIgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyYWNrcyA9IG5ldyBBcnJheTxUcmFjaz4oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHN0ci50cmFja3MuZGF0YS5sZW5ndGg7IGkrKylcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0cmFjazogVHJhY2sgPSBzdHIudHJhY2tzLmRhdGFbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYWNrLmR1cmF0aW9uID0gdGhpcy50aW1lX2Zvcm1hdGVyKHRyYWNrLmR1cmF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFja3MucHVzaCh0cmFjayk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgVE5TUGxheWVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB9XHJcblxyXG4gICAgZ29CYWNrKCkge1xyXG4gICAgICAgIHRoaXMubG9jYXRpb24uYmFjaygpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVGFwKCRldmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBsYXllci5pc0F1ZGlvUGxheWluZygpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnBhdXNlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYoIXRoaXMucGxheWVySW5pdClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuaW5pdEZyb21Vcmwoe1xyXG4gICAgICAgICAgICAgICAgICAgIGF1ZGlvRmlsZTogdGhpcy5kaXNwbGF5ZWRUcmFjay5wcmV2aWV3LFxyXG4gICAgICAgICAgICAgICAgICAgIGxvb3A6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllckluaXQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnBsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgaWYodGhpcy5wbGF5ZXIuaXNBdWRpb1BsYXlpbmcoKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnBhdXNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uSXRlbVRhcChldmVudCl7XHJcblxyXG4gICAgICAgIHRoaXMuZGlzcGxheWVkVHJhY2sudGl0bGUgPSB0aGlzLnRyYWNrc1tldmVudC5pbmRleF0udGl0bGU7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5ZWRUcmFjay5wcmV2aWV3ID0gdGhpcy50cmFja3NbZXZlbnQuaW5kZXhdLnByZXZpZXc7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5ZWRUcmFjay5hcnRpc3QubmFtZSA9IHRoaXMudHJhY2tzW2V2ZW50LmluZGV4XS5hcnRpc3QubmFtZTtcclxuXHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuaW5pdEZyb21Vcmwoe1xyXG4gICAgICAgICAgICBhdWRpb0ZpbGU6IHRoaXMuZGlzcGxheWVkVHJhY2sucHJldmlldyxcclxuICAgICAgICAgICAgbG9vcDogZmFsc2VcclxuICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJJbml0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIucGxheSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRpbWVfZm9ybWF0ZXIoX3NlY29uZHMpIHtcclxuICAgICAgICBpZiAodHlwZW9mIF9zZWNvbmRzICE9PSBcIm51bWJlclwiIHx8IF9zZWNvbmRzIDwgMClcclxuICAgICAgICAgICAgcmV0dXJuIFwiLS1cIjtcclxuXHJcbiAgICAgICAgdmFyIGhvdXJzID0gTWF0aC5mbG9vcihfc2Vjb25kcyAvIDM2MDApLFxyXG4gICAgICAgICAgICBtaW51dGVzID0gTWF0aC5mbG9vcigoX3NlY29uZHMgJSAzNjAwKSAvIDYwKSxcclxuICAgICAgICAgICAgc2Vjb25kcyA9IE1hdGguZmxvb3IoX3NlY29uZHMgJSA2MCk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMucGFkVGltZShob3VycykgIT0gXCIwMFwiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFkVGltZShob3VycykgKyBcIjpcIiArIHRoaXMucGFkVGltZShtaW51dGVzKSArIFwiOlwiICsgdGhpcy5wYWRUaW1lKHNlY29uZHMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFkVGltZShtaW51dGVzKSArIFwiOlwiICsgdGhpcy5wYWRUaW1lKHNlY29uZHMpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwYWRUaW1lKHQpIHtcclxuICAgICAgICByZXR1cm4gdCA8IDEwID8gXCIwXCIrdCA6IHQ7XHJcbiAgICB9XHJcbn1cclxuIl19
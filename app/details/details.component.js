"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var nativescript_audio_player_1 = require("nativescript-audio-player");
var page_1 = require("tns-core-modules/ui/page");
var utils_1 = require("tns-core-modules/utils/utils");
var dismissSoftInput = utils_1.ad.dismissSoftInput;
var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(page, route) {
        var _this = this;
        this.page = page;
        this.route = route;
        this.playerInit = false;
        this.page.actionBarHidden = true;
        dismissSoftInput();
        this.route.queryParams.subscribe(function (params) {
            _this.result = params;
            var http = require("http");
            http.getJSON("https://api.deezer.com/artist/" + _this.result['artistId'] + "/albums")
                .then(function (str) {
                _this.albumResults = new Array();
                console.log(">> " + str.toString());
                console.log(">> " + str.data);
                for (var i = 0; i < str.data.length; i++) {
                    _this.albumResults.push(str.data[i]);
                }
            });
        });
        this.player = new nativescript_audio_player_1.TNSPlayer();
    }
    DetailsComponent.prototype.ngOnInit = function () {
    };
    DetailsComponent.prototype.onTap = function ($event) {
        var _this = this;
        if (this.player.isAudioPlaying()) {
            this.player.pause();
        }
        else {
            if (!this.playerInit) {
                this.player.initFromUrl({
                    audioFile: this.result['preview'],
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
    DetailsComponent = __decorate([
        core_1.Component({
            selector: "app-home",
            moduleId: module.id,
            templateUrl: "./details.component.html",
            styleUrls: ['./details.component.css']
        }),
        __metadata("design:paramtypes", [page_1.Page, router_1.ActivatedRoute])
    ], DetailsComponent);
    return DetailsComponent;
}());
exports.DetailsComponent = DetailsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkZXRhaWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUtsRCwwQ0FBK0M7QUFDL0MsdUVBQW9EO0FBRXBELGlEQUE4QztBQUM5QyxzREFBZ0Q7QUFDaEQsSUFBTyxnQkFBZ0IsR0FBRyxVQUFFLENBQUMsZ0JBQWdCLENBQUM7QUFROUM7SUFNSSwwQkFBb0IsSUFBVSxFQUFVLEtBQXFCO1FBQTdELGlCQXdCQztRQXhCbUIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBSHJELGVBQVUsR0FBWSxLQUFLLENBQUM7UUFJaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLGdCQUFnQixFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUVuQyxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUVyQixJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQ0FBZ0MsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLFNBQVMsQ0FBQztpQkFDL0UsSUFBSSxDQUFDLFVBQUEsR0FBRztnQkFDTCxLQUFJLENBQUMsWUFBWSxHQUFHLElBQUksS0FBSyxFQUFTLENBQUM7Z0JBRXZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2dCQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRTlCLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFDdkM7b0JBQ0ksS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUN2QztZQUNMLENBQUMsQ0FBQyxDQUFBO1FBQ1YsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUkscUNBQVMsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxtQ0FBUSxHQUFSO0lBRUEsQ0FBQztJQUVELGdDQUFLLEdBQUwsVUFBTSxNQUFNO1FBQVosaUJBZ0JDO1FBZkcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxFQUFFO1lBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDdkI7YUFBTTtZQUNILElBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUNuQjtnQkFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztvQkFDcEIsU0FBUyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO29CQUNqQyxJQUFJLEVBQUUsS0FBSztpQkFDZCxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUNKLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO29CQUN2QixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUN2QixDQUFDLENBQUMsQ0FBQzthQUNOO1lBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN0QjtJQUNMLENBQUM7SUFFRCxzQ0FBVyxHQUFYO1FBQ0ksSUFBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxFQUMvQjtZQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDdkI7SUFDTCxDQUFDO0lBM0RRLGdCQUFnQjtRQU41QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7U0FDekMsQ0FBQzt5Q0FPNEIsV0FBSSxFQUFpQix1QkFBYztPQU5wRCxnQkFBZ0IsQ0E0RDVCO0lBQUQsdUJBQUM7Q0FBQSxBQTVERCxJQTREQztBQTVEWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFNlYXJjaFJlc3VsdCB9IGZyb20gXCJ+L1NlYXJjaFJlc3VsdFwiO1xyXG5pbXBvcnQge0FsYnVtfSBmcm9tIFwifi9BbGJ1bVwiO1xyXG5pbXBvcnQge0FydGlzdH0gZnJvbSBcIn4vQXJ0aXN0XCI7XHJcbmltcG9ydCB7U2VhcmNoQmFyfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zZWFyY2gtYmFyXCI7XHJcbmltcG9ydCB7QWN0aXZhdGVkUm91dGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtUTlNQbGF5ZXJ9IGZyb20gXCJuYXRpdmVzY3JpcHQtYXVkaW8tcGxheWVyXCI7XHJcbmltcG9ydCB7ZnJvbUZpbGUsIEltYWdlU291cmNlfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1zb3VyY2VcIjtcclxuaW1wb3J0IHtQYWdlfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XHJcbmltcG9ydCB7YWR9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3V0aWxzL3V0aWxzXCI7XHJcbmltcG9ydCBkaXNtaXNzU29mdElucHV0ID0gYWQuZGlzbWlzc1NvZnRJbnB1dDtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiYXBwLWhvbWVcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2RldGFpbHMuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogWycuL2RldGFpbHMuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEZXRhaWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHByaXZhdGUgcGxheWVyOiBUTlNQbGF5ZXI7XHJcbiAgICBwcml2YXRlIGFsYnVtUmVzdWx0czogQXJyYXk8QWxidW0+O1xyXG4gICAgcHJpdmF0ZSBwbGF5ZXJJbml0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHJlc3VsdDogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcclxuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICBkaXNtaXNzU29mdElucHV0KCk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucmVzdWx0ID0gcGFyYW1zO1xyXG5cclxuICAgICAgICAgICAgdmFyIGh0dHAgPSByZXF1aXJlKFwiaHR0cFwiKTtcclxuXHJcbiAgICAgICAgICAgIGh0dHAuZ2V0SlNPTihcImh0dHBzOi8vYXBpLmRlZXplci5jb20vYXJ0aXN0L1wiICsgdGhpcy5yZXN1bHRbJ2FydGlzdElkJ10gKyBcIi9hbGJ1bXNcIilcclxuICAgICAgICAgICAgICAgIC50aGVuKHN0ciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGJ1bVJlc3VsdHMgPSBuZXcgQXJyYXk8QWxidW0+KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiPj4gXCIgKyBzdHIudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCI+PiBcIiArIHN0ci5kYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHN0ci5kYXRhLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGJ1bVJlc3VsdHMucHVzaChzdHIuZGF0YVtpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgVE5TUGxheWVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uVGFwKCRldmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBsYXllci5pc0F1ZGlvUGxheWluZygpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnBhdXNlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYoIXRoaXMucGxheWVySW5pdClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuaW5pdEZyb21Vcmwoe1xyXG4gICAgICAgICAgICAgICAgICAgIGF1ZGlvRmlsZTogdGhpcy5yZXN1bHRbJ3ByZXZpZXcnXSxcclxuICAgICAgICAgICAgICAgICAgICBsb29wOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJJbml0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5wbGF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIGlmKHRoaXMucGxheWVyLmlzQXVkaW9QbGF5aW5nKCkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5wYXVzZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=
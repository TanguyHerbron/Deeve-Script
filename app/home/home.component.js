"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("tns-core-modules/ui/page");
var observable_1 = require("tns-core-modules/data/observable");
var HomeComponent = /** @class */ (function (_super) {
    __extends(HomeComponent, _super);
    function HomeComponent(page, router) {
        var _this = _super.call(this) || this;
        _this.page = page;
        _this.router = router;
        _this.page.actionBarHidden = true;
        return _this;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.onSubmit = function (args) {
        var searchBar = args.object;
        this.refreshList(searchBar.text);
    };
    HomeComponent.prototype.refreshList = function (args) {
        var _this = this;
        var http = require("http");
        http.getJSON("https://api.deezer.com/search?q=" + args)
            .then(function (str) {
            _this.searchResults = new Array();
            for (var i = 0; i < str.data.length; i++) {
                _this.searchResults.push(str.data[i]);
            }
        });
    };
    HomeComponent.prototype.onItemTap = function (event) {
        var navigationExtras = {
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
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "app-home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
            styleUrls: ['./home.component.css']
        }),
        __metadata("design:paramtypes", [page_1.Page, router_1.Router])
    ], HomeComponent);
    return HomeComponent;
}(observable_1.Observable));
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUtsRCwwQ0FBeUQ7QUFDekQsaURBQThDO0FBRzlDLCtEQUE0RDtBQVE1RDtJQUFtQyxpQ0FBVTtJQUl6Qyx1QkFBb0IsSUFBVSxFQUFVLE1BQWM7UUFBdEQsWUFDSSxpQkFBTyxTQUVWO1FBSG1CLFVBQUksR0FBSixJQUFJLENBQU07UUFBVSxZQUFNLEdBQU4sTUFBTSxDQUFRO1FBRWxELEtBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQzs7SUFDckMsQ0FBQztJQUVELGdDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRU0sZ0NBQVEsR0FBZixVQUFnQixJQUFJO1FBQ2hCLElBQUksU0FBUyxHQUFjLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELG1DQUFXLEdBQVgsVUFBWSxJQUFZO1FBQXhCLGlCQVlDO1FBWEcsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTNCLElBQUksQ0FBQyxPQUFPLENBQUMsa0NBQWtDLEdBQUcsSUFBSSxDQUFDO2FBQ2xELElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDTCxLQUFJLENBQUMsYUFBYSxHQUFHLElBQUksS0FBSyxFQUFnQixDQUFDO1lBRS9DLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFDdkM7Z0JBQ0ksS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3hDO1FBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDVixDQUFDO0lBRUQsaUNBQVMsR0FBVCxVQUFVLEtBQUs7UUFDWCxJQUFJLGdCQUFnQixHQUFxQjtZQUNyQyxXQUFXLEVBQUU7Z0JBQ1QsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZO2dCQUMzRCxRQUFRLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUk7Z0JBQ3JELE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLO2dCQUM5QyxVQUFVLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ3JELFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPO2dCQUNsRCxTQUFTLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUU7YUFDdEQ7U0FDSixDQUFDO1FBRUYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUE1Q1EsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDdEMsQ0FBQzt5Q0FLNEIsV0FBSSxFQUFrQixlQUFNO09BSjdDLGFBQWEsQ0E2Q3pCO0lBQUQsb0JBQUM7Q0FBQSxBQTdDRCxDQUFtQyx1QkFBVSxHQTZDNUM7QUE3Q1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFNlYXJjaFJlc3VsdCB9IGZyb20gXCJ+L1NlYXJjaFJlc3VsdFwiO1xyXG5pbXBvcnQge0FsYnVtfSBmcm9tIFwifi9BbGJ1bVwiO1xyXG5pbXBvcnQge0FydGlzdH0gZnJvbSBcIn4vQXJ0aXN0XCI7XHJcbmltcG9ydCB7U2VhcmNoQmFyfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zZWFyY2gtYmFyXCI7XHJcbmltcG9ydCB7TmF2aWdhdGlvbkV4dHJhcywgUm91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7UGFnZX0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xyXG5pbXBvcnQge0JvdHRvbU5hdmlnYXRpb25UYWIsIE9uVGFiUHJlc3NlZEV2ZW50RGF0YSwgT25UYWJTZWxlY3RlZEV2ZW50RGF0YX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1ib3R0b20tbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQge09ic2VydmFibGVBcnJheX0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImFwcC1ob21lXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9ob21lLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBleHRlbmRzIE9ic2VydmFibGUgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHVibGljIHNlYXJjaFJlc3VsdHM6IEFycmF5PFNlYXJjaFJlc3VsdD47XHJcbiAgICBwdWJsaWMgc2VhcmNoUGhyYXNlOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25TdWJtaXQoYXJncykge1xyXG4gICAgICAgIGxldCBzZWFyY2hCYXIgPSA8U2VhcmNoQmFyPmFyZ3Mub2JqZWN0O1xyXG4gICAgICAgIHRoaXMucmVmcmVzaExpc3Qoc2VhcmNoQmFyLnRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2hMaXN0KGFyZ3M6IHN0cmluZykge1xyXG4gICAgICAgIHZhciBodHRwID0gcmVxdWlyZShcImh0dHBcIik7XHJcblxyXG4gICAgICAgIGh0dHAuZ2V0SlNPTihcImh0dHBzOi8vYXBpLmRlZXplci5jb20vc2VhcmNoP3E9XCIgKyBhcmdzKVxyXG4gICAgICAgICAgICAudGhlbihzdHIgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hSZXN1bHRzID0gbmV3IEFycmF5PFNlYXJjaFJlc3VsdD4oKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgc3RyLmRhdGEubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hSZXN1bHRzLnB1c2goc3RyLmRhdGFbaV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uSXRlbVRhcChldmVudCkge1xyXG4gICAgICAgIGxldCBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgXCJjb3ZlclwiOiB0aGlzLnNlYXJjaFJlc3VsdHNbZXZlbnQuaW5kZXhdLmFsYnVtLmNvdmVyX21lZGl1bSxcclxuICAgICAgICAgICAgICAgIFwiYXJ0aXN0XCI6IHRoaXMuc2VhcmNoUmVzdWx0c1tldmVudC5pbmRleF0uYXJ0aXN0Lm5hbWUsXHJcbiAgICAgICAgICAgICAgICBcInRpdGxlXCI6IHRoaXMuc2VhcmNoUmVzdWx0c1tldmVudC5pbmRleF0udGl0bGUsXHJcbiAgICAgICAgICAgICAgICBcImFydGlzdElkXCI6IHRoaXMuc2VhcmNoUmVzdWx0c1tldmVudC5pbmRleF0uYXJ0aXN0LmlkLFxyXG4gICAgICAgICAgICAgICAgXCJwcmV2aWV3XCI6IHRoaXMuc2VhcmNoUmVzdWx0c1tldmVudC5pbmRleF0ucHJldmlldyxcclxuICAgICAgICAgICAgICAgIFwiYWxidW1JZFwiOiB0aGlzLnNlYXJjaFJlc3VsdHNbZXZlbnQuaW5kZXhdLmFsYnVtLmlkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvZGV0YWlsc1wiXSwgbmF2aWdhdGlvbkV4dHJhcyk7XHJcbiAgICB9XHJcbn1cclxuIl19
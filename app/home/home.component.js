"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("tns-core-modules/ui/page");
var nativescript_bottom_navigation_1 = require("nativescript-bottom-navigation");
var observable_1 = require("tns-core-modules/data/observable");
var HomeComponent = /** @class */ (function (_super) {
    __extends(HomeComponent, _super);
    function HomeComponent(page, router) {
        var _this = _super.call(this) || this;
        _this.page = page;
        _this.router = router;
        _this.tabs = [
            new nativescript_bottom_navigation_1.BottomNavigationTab('Home', 'ic_home'),
            new nativescript_bottom_navigation_1.BottomNavigationTab('Search', 'baseline_search_white_18', false),
            new nativescript_bottom_navigation_1.BottomNavigationTab('Account', 'baseline_account_circle_white_18', false)
        ];
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
                "preview": this.searchResults[event.index].preview
            }
        };
        this.router.navigate(["/details"], navigationExtras);
    };
    HomeComponent.prototype.onBottomNavigationTabPressed = function (args) {
        console.log("Tab pressed:  " + args.index);
    };
    HomeComponent.prototype.onBottomNavigationTabSelected = function (args) {
        console.log("Tab selected:  " + args.oldIndex);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUtsRCwwQ0FBeUQ7QUFDekQsaURBQThDO0FBQzlDLGlGQUFrSDtBQUVsSCwrREFBNEQ7QUFRNUQ7SUFBbUMsaUNBQVU7SUFVekMsdUJBQW9CLElBQVUsRUFBVSxNQUFjO1FBQXRELFlBQ0ksaUJBQU8sU0FFVjtRQUhtQixVQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsWUFBTSxHQUFOLE1BQU0sQ0FBUTtRQU4vQyxVQUFJLEdBQTBCO1lBQ2pDLElBQUksb0RBQW1CLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQztZQUMxQyxJQUFJLG9EQUFtQixDQUFDLFFBQVEsRUFBRSwwQkFBMEIsRUFBRSxLQUFLLENBQUM7WUFDcEUsSUFBSSxvREFBbUIsQ0FBQyxTQUFTLEVBQUUsa0NBQWtDLEVBQUUsS0FBSyxDQUFDO1NBQ2hGLENBQUM7UUFJRSxLQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7O0lBQ3JDLENBQUM7SUFFRCxnQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVNLGdDQUFRLEdBQWYsVUFBZ0IsSUFBSTtRQUNoQixJQUFJLFNBQVMsR0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxtQ0FBVyxHQUFYLFVBQVksSUFBWTtRQUF4QixpQkFZQztRQVhHLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUzQixJQUFJLENBQUMsT0FBTyxDQUFDLGtDQUFrQyxHQUFHLElBQUksQ0FBQzthQUNsRCxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQ0wsS0FBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLEtBQUssRUFBZ0IsQ0FBQztZQUUvQyxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQ3ZDO2dCQUNJLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN4QztRQUNMLENBQUMsQ0FBQyxDQUFBO0lBQ1YsQ0FBQztJQUVELGlDQUFTLEdBQVQsVUFBVSxLQUFLO1FBQ1gsSUFBSSxnQkFBZ0IsR0FBcUI7WUFDckMsV0FBVyxFQUFFO2dCQUNULE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWTtnQkFDM0QsUUFBUSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJO2dCQUNyRCxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSztnQkFDOUMsVUFBVSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUNyRCxTQUFTLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTzthQUNyRDtTQUNKLENBQUM7UUFFRixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELG9EQUE0QixHQUE1QixVQUE2QixJQUEyQjtRQUNwRCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFpQixJQUFJLENBQUMsS0FBTyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELHFEQUE2QixHQUE3QixVQUE4QixJQUE0QjtRQUN0RCxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFrQixJQUFJLENBQUMsUUFBVSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQXpEUSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUN0QyxDQUFDO3lDQVc0QixXQUFJLEVBQWtCLGVBQU07T0FWN0MsYUFBYSxDQTBEekI7SUFBRCxvQkFBQztDQUFBLEFBMURELENBQW1DLHVCQUFVLEdBMEQ1QztBQTFEWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU2VhcmNoUmVzdWx0IH0gZnJvbSBcIn4vU2VhcmNoUmVzdWx0XCI7XHJcbmltcG9ydCB7QWxidW19IGZyb20gXCJ+L0FsYnVtXCI7XHJcbmltcG9ydCB7QXJ0aXN0fSBmcm9tIFwifi9BcnRpc3RcIjtcclxuaW1wb3J0IHtTZWFyY2hCYXJ9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3NlYXJjaC1iYXJcIjtcclxuaW1wb3J0IHtOYXZpZ2F0aW9uRXh0cmFzLCBSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtQYWdlfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XHJcbmltcG9ydCB7Qm90dG9tTmF2aWdhdGlvblRhYiwgT25UYWJQcmVzc2VkRXZlbnREYXRhLCBPblRhYlNlbGVjdGVkRXZlbnREYXRhfSBmcm9tIFwibmF0aXZlc2NyaXB0LWJvdHRvbS1uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZUFycmF5fSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiYXBwLWhvbWVcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogWycuL2hvbWUuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGV4dGVuZHMgT2JzZXJ2YWJsZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwdWJsaWMgc2VhcmNoUmVzdWx0czogQXJyYXk8U2VhcmNoUmVzdWx0PjtcclxuICAgIHB1YmxpYyBzZWFyY2hQaHJhc2U6IHN0cmluZztcclxuXHJcbiAgICBwdWJsaWMgdGFiczogQm90dG9tTmF2aWdhdGlvblRhYltdID0gW1xyXG4gICAgICAgIG5ldyBCb3R0b21OYXZpZ2F0aW9uVGFiKCdIb21lJywgJ2ljX2hvbWUnKSxcclxuICAgICAgICBuZXcgQm90dG9tTmF2aWdhdGlvblRhYignU2VhcmNoJywgJ2Jhc2VsaW5lX3NlYXJjaF93aGl0ZV8xOCcsIGZhbHNlKSxcclxuICAgICAgICBuZXcgQm90dG9tTmF2aWdhdGlvblRhYignQWNjb3VudCcsICdiYXNlbGluZV9hY2NvdW50X2NpcmNsZV93aGl0ZV8xOCcsIGZhbHNlKVxyXG4gICAgXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblN1Ym1pdChhcmdzKSB7XHJcbiAgICAgICAgbGV0IHNlYXJjaEJhciA9IDxTZWFyY2hCYXI+YXJncy5vYmplY3Q7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoTGlzdChzZWFyY2hCYXIudGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaExpc3QoYXJnczogc3RyaW5nKSB7XHJcbiAgICAgICAgdmFyIGh0dHAgPSByZXF1aXJlKFwiaHR0cFwiKTtcclxuXHJcbiAgICAgICAgaHR0cC5nZXRKU09OKFwiaHR0cHM6Ly9hcGkuZGVlemVyLmNvbS9zZWFyY2g/cT1cIiArIGFyZ3MpXHJcbiAgICAgICAgICAgIC50aGVuKHN0ciA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaFJlc3VsdHMgPSBuZXcgQXJyYXk8U2VhcmNoUmVzdWx0PigpO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBzdHIuZGF0YS5sZW5ndGg7IGkrKylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaFJlc3VsdHMucHVzaChzdHIuZGF0YVtpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25JdGVtVGFwKGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IG5hdmlnYXRpb25FeHRyYXM6IE5hdmlnYXRpb25FeHRyYXMgPSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICBcImNvdmVyXCI6IHRoaXMuc2VhcmNoUmVzdWx0c1tldmVudC5pbmRleF0uYWxidW0uY292ZXJfbWVkaXVtLFxyXG4gICAgICAgICAgICAgICAgXCJhcnRpc3RcIjogdGhpcy5zZWFyY2hSZXN1bHRzW2V2ZW50LmluZGV4XS5hcnRpc3QubmFtZSxcclxuICAgICAgICAgICAgICAgIFwidGl0bGVcIjogdGhpcy5zZWFyY2hSZXN1bHRzW2V2ZW50LmluZGV4XS50aXRsZSxcclxuICAgICAgICAgICAgICAgIFwiYXJ0aXN0SWRcIjogdGhpcy5zZWFyY2hSZXN1bHRzW2V2ZW50LmluZGV4XS5hcnRpc3QuaWQsXHJcbiAgICAgICAgICAgICAgICBcInByZXZpZXdcIjogdGhpcy5zZWFyY2hSZXN1bHRzW2V2ZW50LmluZGV4XS5wcmV2aWV3XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvZGV0YWlsc1wiXSwgbmF2aWdhdGlvbkV4dHJhcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Cb3R0b21OYXZpZ2F0aW9uVGFiUHJlc3NlZChhcmdzOiBPblRhYlByZXNzZWRFdmVudERhdGEpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgVGFiIHByZXNzZWQ6ICAke2FyZ3MuaW5kZXh9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Cb3R0b21OYXZpZ2F0aW9uVGFiU2VsZWN0ZWQoYXJnczogT25UYWJTZWxlY3RlZEV2ZW50RGF0YSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBUYWIgc2VsZWN0ZWQ6ICAke2FyZ3Mub2xkSW5kZXh9YCk7XHJcbiAgICB9XHJcbn1cclxuIl19
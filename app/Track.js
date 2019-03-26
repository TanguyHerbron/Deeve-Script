"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Track = /** @class */ (function () {
    function Track(id, readable, title, title_short, title_version, isrc, link, duration, track_position, disk_number, rank, explicit_lyrics, explicit_content_lyrics, explicit_content_cover, preview, artist, type, album) {
        this.id = id;
        this.readable = readable;
        this.title = title;
        this.title_short = title_short;
        this.title_version = title_version;
        this.isrc = isrc;
        this.link = link;
        this.duration = duration;
        this.track_position = track_position;
        this.disk_number = disk_number;
        this.rank = rank;
        this.explicit_lyrics = explicit_lyrics;
        this.explicit_content_lyrics = explicit_content_lyrics;
        this.explicit_content_cover = explicit_content_cover;
        this.preview = preview;
        this.artist = artist;
        this.type = type;
        this.album = album;
    }
    return Track;
}());
exports.Track = Track;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJUcmFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBO0lBRUUsZUFBbUIsRUFBVyxFQUNYLFFBQWtCLEVBQ2xCLEtBQWMsRUFDZCxXQUFvQixFQUNwQixhQUFzQixFQUN0QixJQUFhLEVBQ2IsSUFBYSxFQUNiLFFBQWlCLEVBQ2pCLGNBQXVCLEVBQ3ZCLFdBQW9CLEVBQ3BCLElBQWEsRUFDYixlQUF5QixFQUN6Qix1QkFBZ0MsRUFDaEMsc0JBQStCLEVBQy9CLE9BQWdCLEVBQ2hCLE1BQWUsRUFDZixJQUFhLEVBQ2IsS0FBYTtRQWpCYixPQUFFLEdBQUYsRUFBRSxDQUFTO1FBQ1gsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixVQUFLLEdBQUwsS0FBSyxDQUFTO1FBQ2QsZ0JBQVcsR0FBWCxXQUFXLENBQVM7UUFDcEIsa0JBQWEsR0FBYixhQUFhLENBQVM7UUFDdEIsU0FBSSxHQUFKLElBQUksQ0FBUztRQUNiLFNBQUksR0FBSixJQUFJLENBQVM7UUFDYixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLG1CQUFjLEdBQWQsY0FBYyxDQUFTO1FBQ3ZCLGdCQUFXLEdBQVgsV0FBVyxDQUFTO1FBQ3BCLFNBQUksR0FBSixJQUFJLENBQVM7UUFDYixvQkFBZSxHQUFmLGVBQWUsQ0FBVTtRQUN6Qiw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQVM7UUFDaEMsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUFTO1FBQy9CLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDaEIsV0FBTSxHQUFOLE1BQU0sQ0FBUztRQUNmLFNBQUksR0FBSixJQUFJLENBQVM7UUFDYixVQUFLLEdBQUwsS0FBSyxDQUFRO0lBRWhDLENBQUM7SUFHSCxZQUFDO0FBQUQsQ0FBQyxBQXhCRCxJQXdCQztBQXhCWSxzQkFBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXJ0aXN0fSBmcm9tIFwiLi9BcnRpc3RcIjtcclxuaW1wb3J0IHtBbGJ1bX0gZnJvbSBcIi4vQWxidW1cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUcmFjayB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpZD86IHN0cmluZyxcclxuICAgICAgICAgICAgICBwdWJsaWMgcmVhZGFibGU/OiBib29sZWFuLFxyXG4gICAgICAgICAgICAgIHB1YmxpYyB0aXRsZT86IHN0cmluZyxcclxuICAgICAgICAgICAgICBwdWJsaWMgdGl0bGVfc2hvcnQ/OiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgcHVibGljIHRpdGxlX3ZlcnNpb24/OiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgcHVibGljIGlzcmM/OiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgcHVibGljIGxpbms/OiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgcHVibGljIGR1cmF0aW9uPzogc3RyaW5nLFxyXG4gICAgICAgICAgICAgIHB1YmxpYyB0cmFja19wb3NpdGlvbj86IG51bWJlcixcclxuICAgICAgICAgICAgICBwdWJsaWMgZGlza19udW1iZXI/OiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgcHVibGljIHJhbms/OiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgcHVibGljIGV4cGxpY2l0X2x5cmljcz86IGJvb2xlYW4sXHJcbiAgICAgICAgICAgICAgcHVibGljIGV4cGxpY2l0X2NvbnRlbnRfbHlyaWNzPzogbnVtYmVyLFxyXG4gICAgICAgICAgICAgIHB1YmxpYyBleHBsaWNpdF9jb250ZW50X2NvdmVyPzogbnVtYmVyLFxyXG4gICAgICAgICAgICAgIHB1YmxpYyBwcmV2aWV3Pzogc3RyaW5nLFxyXG4gICAgICAgICAgICAgIHB1YmxpYyBhcnRpc3Q/OiBBcnRpc3QsXHJcbiAgICAgICAgICAgICAgcHVibGljIHR5cGU/OiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgcHVibGljIGFsYnVtPzogQWxidW0pIHtcclxuXHJcbiAgfVxyXG5cclxuXHJcbn1cclxuIl19
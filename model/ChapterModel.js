/**
 * Created by devebiz on 11/6/15.
 */

(function () {
    var ChapterModel = function () {};

    Object.defineProperties(ChapterModel.prototype, {
        getChapters : {
            value: function() {
                return [
                {
                    id: 989,
                        title: "Überschrift 1",
                    summary:"Zusammenfassung"
                },
                {
                    id: 989,
                        title: "Überschrift 1",
                    summary:"Zusammenfassung"
                },
                {
                    id: 989,
                        title: "Überschrift 1",
                    summary:"Zusammenfassung"
                }
            ]
        }
    }
});
app.service("ChapterModel",ChapterModel);

}());
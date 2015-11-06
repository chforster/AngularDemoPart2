/**
 * Created by devebiz on 11/6/15.
 */
app.controller("ChapterController", function ($scope, ChapterModel) {
   $scope.info = ChapterModel.getChapters();
});
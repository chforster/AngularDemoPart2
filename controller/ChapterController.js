/**
 * Created by devebiz on 11/6/15.
 */
app.controller("ChapterController", function ($scope, $routeParams, ChapterModel) {
   $scope.info = ChapterModel.getChapters();
    $scope.parameter = $routeParams.id;
});
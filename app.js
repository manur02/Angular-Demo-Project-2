var app = angular.module("CakeSlideApp", []);

app.controller("PhotoController", function($scope) {

    $scope.photosCount = 0;
    $scope.photos = ["Images/img1.jpeg",
        "Images/img2.jpeg",
        "Images/img3.jpeg",
        "Images/img4.jpeg",
        "Images/img5.jpeg",
        "Images/img6.jpeg"
    ]

    $scope.previous = function() {
        $scope.photosCount = $scope.photosCount - 1;

    }

    $scope.next = function() {
        $scope.photosCount = $scope.photosCount + 1;

    }
});
var app=angular.module("myApp",[]);
app.controller("myCtrl",function($scope){
    console.log("My controller.....");

    $scope.users=[
        {name:"Product One",prince:"109.2"},
        {name:"Product Two",prince:"100.7"},
        {name:"Product Three",prince:"223.7"},
    ];
    $scope.addUser=function(){
        $scope.users.push($scope.newUser);
        $scope.newUser={};
        $scope.message="New User Added successfully";
    };
    $scope.selectUser = function(user){
        console.log(user);
        $scope.clickedUser = user;
    };
    $scope.editUser = function (){
        $scope.message = "User Edited successfully";
    };
    $scope.deleteUser = function (){
        $scope.users.splice($scope.users.indexOf($scope.clickedUser),1);
        $scope.message = "User Deleted successfully";
    };
    $scope.clearMessage = function (){
        $scope.message = "";
    };
});
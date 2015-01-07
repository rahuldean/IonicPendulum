angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
      
      $scope.searchByTag = function(friend){
        return function(frnd) {
          for(var i =0; i < $scope.friends.length; i++){
            var found = false;
            for(var j = 0; j < $scope.friends[i].tags.length; j++){
              if($scope.friends[i].tags[j] == $scope.searchFriends){
                return $scope.friends[i];
                
              }
              
            }
            
          }
          
        }
        
      }
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

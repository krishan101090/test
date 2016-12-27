angular.module( 'app', [] ).controller( 'HomeCtrl', function( $scope ) {
  // Get the modal
  var modal = document.getElementById( 'myModal' );
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName( "close" )[ 0 ];
  // When the user clicks the button, open the modal 
  $scope.onclick = function() {
      modal.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
} );

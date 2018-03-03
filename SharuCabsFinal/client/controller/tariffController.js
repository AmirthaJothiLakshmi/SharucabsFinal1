angular.module('Sharucabs').controller('tariffController', function($scope,$http,$mdDialog) {



var initTariff=function(){

console.log('Init executed');
  $http.get('/GetTariff').then(function(response) {

      $scope.TariffData = response.data;
  });
};

    $scope.AddTariff=function(){

$http.post('/AddTariff',$scope.Tariff).then(function(res){
  console.log('Tariff Data Saved');


});
$scope.Tariff="";
initTariff();
    };

    $http.get('/GetTariff').then(function(response) {
        $scope.TariffData = response.data;
    });

    $scope.GetTariff = function(t) {
      $scope.TariffId=t._id;
        $http.get('/GetTariff/' +t._id).then(function(response) {
                $scope.getTariff = response;
        });
      };






    $scope.UpdateTariff=function(){
      $http.put('/UpdateTariff/'+$scope.TariffId,$scope.getTariff.data).then(function(res){
        console.log(' data edited successfully');
      });
initTariff();
 };




    $scope.DeleteTariff = function(tariff,event) {

                     var confirm = $mdDialog.confirm()
                         .title('Please confirm to delete the record')
                       .textContent('Record will be deleted .')
                         .targetEvent(event)
                         .ok('Yes')
                         .cancel('No');
                         $mdDialog.show(confirm).then(function() {

      $http.delete('/DeleteTariff/' + tariff._id).then(function(response) {
                                    console.log('Deleted');
  initTariff();
                                });

                                              }, function() {
                             console.log('I dont want to delete my record.');
                        });

     };







      $('#StartPeakHour').bootstrapMaterialDatePicker({
        format : 'HH:mm',
        date:false,
       time:true,
        });

        $('#StopPeakHour').bootstrapMaterialDatePicker({
          format : 'HH:mm',
          date:false,
         time:true,
          });





    });

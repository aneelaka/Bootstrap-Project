
var app=angular.module('myApp',['angularUtils.directives.dirPagination']);
         app.controller('studentController',function($scope,$http) 
        {
            
             $scope.students=[];
               $http({method:'GET',url:"hw8.php",params:{ branch:"legislator"}
                    }).then(function successCallback(response){console.log(response);
                    $scope.students=response.data.results;console.log($scope.students);
                                                              });
             $http({method:'GET',url:"hw8.php",params:{ branch:"l_senate"}
                    }).then(function successCallback(response){console.log(response);
                    $scope.lsenate=response.data.results;console.log($scope.lsenate);
                                                              });
             $http({method:'GET',url:"hw8.php",params:{ branch:"l_house"}
                    }).then(function successCallback(response){console.log(response);
                    $scope.lhouse=response.data.results;console.log($scope.lhouse);
                                                              });
             
            $scope.details=function details(student)
          {
           
            $scope.s_details=student;   
          
          }
                    
            
            $http({method:'GET',url:"hw8.php",params:{ branch:"bills"}
                    }).then(function successCallback(response){console.log(response);
                    $scope.bills=response.data.results;console.log($scope.bills);
                                                              });
             $scope.b_id=function b_id(id)
          {
           
            $scope.bioguide_id=id;   
          
          
              $http({method:'GET',url:"hw8.php",params:{ branch:"bills_data",id:$scope.bioguide_id}
                    }).then(function successCallback(response){console.log(response);
                    $scope.bill_data=response.data.results;console.log($scope.bill_data);
                                                              });
              $http({method:'GET',url:"hw8.php",params:{ branch:"comm_data",id:$scope.bioguide_id}
                    }).then(function successCallback(response){console.log(response);
                    $scope.comm_data=response.data.results;console.log($scope.comm_data);
                                                              });
             }
              $scope.bill_vd=function bill_vd(bill)
          {
           
            $scope.bill_details=bill;
                  
          
          }
                  $http({method:'GET',url:"hw8.php",params:{ branch:"new_bills"}
                    }).then(function successCallback(response){console.log(response);
                    $scope.nbills=response.data.results;console.log($scope.nbills);
                                                              });
               
            $http({method:'GET',url:"hw8.php",params:{ branch:"hcommittee"}
                    }).then(function successCallback(response){console.log(response);
                    $scope.comm=response.data.results;console.log($scope.comm[0].committee_id);
                                                              });
            $http({method:'GET',url:"hw8.php",params:{ branch:"scommittee"}
                    }).then(function successCallback(response){console.log(response);
                    $scope.scomm=response.data.results;console.log($scope.scomm[0].committee_id);
                                                              });
            $http({method:'GET',url:"hw8.php",params:{ branch:"jcommittee"}
                    }).then(function successCallback(response){console.log(response);
                    $scope.jcomm=response.data.results;console.log($scope.jcomm[0].committee_id);
                                                              });
             
            
            
         });
          
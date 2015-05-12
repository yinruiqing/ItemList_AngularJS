    angular.module('product', [])

    .service('productData', function () {
        return [
            {
                id:1011,
                name:'Apple',
                price : 4
            },
            {
                id:1012,
                name:'Pear',
                price : 3
            },
            {
                id:2022,
                name:'Peach',
                price : 2
            },
            {
                id:3212,
                name:'Plum',
                price : 2
            },
            {
                id:3314,
                name:'Mango',
                price : 4
            }
        ];
    })

    .controller('productController', function ($scope,productData) {
        $scope.productData = productData;

        $scope.orderType = 'id';

        $scope.order = '-';

        $scope.changeOrder = function(type){

            $scope.orderType = type;

            if($scope.order === ''){
                $scope.order = '-';
            }else{
                $scope.order = '';
            }
        }
    });
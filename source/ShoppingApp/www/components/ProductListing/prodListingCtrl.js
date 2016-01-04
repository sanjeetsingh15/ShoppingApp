var prodListingCtrl;



prodListingCtrl = (function($rootScope, $scope, $state, $ionicLoading, prodListingSrvc) {

	function prodListingCtrl($rootScope,  $scope, prodListingSrvc , $state , $stateParams, $ionicLoading) {
        $ionicLoading.show();
        this.state = $state;
        var self = this;
        this.showMe = false;
        this.showListing = true;
        this.scope = $scope;

        //this.scope.$on('$ionicView.beforeEnter', function () {

        this.searchproducts = $rootScope.srch;
                
        if(localStorage.getItem("cartTotal") && localStorage.getItem("cartTotal") != 'NaN' && localStorage.getItem("cartid") && localStorage.getItem("cartid") != 'NaN' ){
            self.cartTotal = localStorage.getItem("cartTotal");    
        } else {
            self.cartTotal = '0';
        }
            
            if($stateParams.category_id){ console.log($stateParams);
                var category_id = $stateParams.category_id;
                var category_name = $stateParams.category_name;
            }
          
            prodListingSrvc.getCdata(category_id).then(function(response) {
                self.prodListing = response ;
                self.categoryHeading = category_name;
            }).finally(function(){
                $ionicLoading.hide();
            });
       // });
       

    
    
  
    prodListingCtrl.prototype.showMeSearch = function(){
			if(this.showMe == false){ 
				this.showMe = true;
			} else {
				this.showMe = false;
			}
    }

    prodListingCtrl.prototype.showMeSelect = function(){
    		if(this.showListing == false){ 
				this.showListing = true; 
			} else {
				this.showListing = false;
			}
    }

    prodListingCtrl.prototype.myclick = function(val){
        this.showListing = true;
        this.selectPrice = val;
    }


   prodListingCtrl.prototype.fetchDetail = function(product_id){
    this.state.go("app.product",{ 'product_id':product_id });
   }
}


	 
   
    return prodListingCtrl;


})();


prodListingModule.controller('prodListingCtrl', prodListingCtrl);
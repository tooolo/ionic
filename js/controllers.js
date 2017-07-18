angular.module('starter.controllers', ['ionic'])
	.controller('homeCtrl', function($scope, $lunbopic, $HomeGoodlistRow, $HomeNewLists, $HomechooseLists) {
		$scope.lunbodata = $lunbopic.all()
		$scope.goodlist = $HomeGoodlistRow.all()
		$scope.newlist = $HomeNewLists.all()
		$scope.shoollist = $HomechooseLists.all()
	})

	.controller('homestudyCtrl', function($scope, $studyList, $pingjiaList, $ionicModal,$state) {
		$scope.studymulu = $studyList.all()
		$scope.assesslist = $pingjiaList.all()
		$scope.mulu = true
		$scope.lcolor = { color: "#999" }
		$scope.pcolor = { color: "#999" }
		$scope.toggle = function() {
			$scope.lcolor = { color: "#63aafc" }
			$scope.pcolor = { color: "#999" }
			$scope.mulu = true
			$scope.xiangq = false
		}
		$scope.xq = function() {
			$scope.pcolor = { color: "#63aafc" }
			$scope.lcolor = { color: "#999" }
			$scope.mulu = false
			$scope.xiangq = true
		}
		$scope.showModal = function() {
			$ionicModal.fromTemplateUrl("modal.html", { scope: $scope }).then(
				function(modal) {
					$scope.modal = modal;
					$scope.modal.show();
				}
			)
		}
		
        $scope.count=300;
        $scope.tolCount=function(){
        	console.log($scope.text.length)
        	$scope.count=300-$scope.text.length;
        }
        $scope.please=true
        $scope.pump = function() {
			$state.go("tab.personal")
			$scope.please=false
		}
        
     $scope.payGo=function(){
    var charge={"id":"ch_ez9a5O9GSCy5fj5afHTGmvHG","object":"charge","created":1442542657,"livemode":false,"paid":false,"refunded":false,"app":"app_ir1uHKe9aHaL9SWn","channel":"upacp","order_no":"123456789","client_ip":"127.0.0.1","amount":100,"amount_settle":0,"currency":"cny","subject":"Your Subject","body":"Your Body","extra":{},"time_paid":null,"time_expire":1442546257,"time_settle":null,"transaction_no":null,"refunds":{"object":"list","url":"/v1/charges/ch_ez9a5O9GSCy5fj5afHTGmvHG/refunds","has_more":false,"data":[]},"amount_refunded":0,"failure_code":null,"failure_msg":null,"metadata":{},"credential":{"object":"credential","upacp":{"tn":"201509181017374044084","mode":"00"}},"description":null};
    try{
        pingpp.createPayment(charge, function(result){
            CommonJs.AlertPopup('suc: '+result);  //"success"
        }, function(result){
            CommonJs.AlertPopup('err: '+result);  //"fail"|"cancel"|"invalid"
        });
    }
    catch(e){
        alert(e);
    }
};

window.plugins.html5Video.initialize({
            "video1" : "img/mov_aaa.mp4"
})
	})

	.controller('courselistCtrl', function($scope, $courseLists) {
		$scope.courselist = $courseLists.page(1)
		$scope.clbs = [
			{ "id": 0, "btnName": "全部" },
			{ "id": 1, "btnName": "UI" },
			{ "id": 2, "btnName": "JAVA" },
			{ "id": 3, "btnName": "Android" },
			{ "id": 4, "btnName": "IOS" },
			{ "id": 5, "btnName": "其他" }
		]
		$scope.pbs = [
			{ "id": 0, "btnName": "全部" },
			{ "id": 1, "btnName": "免费" },
			{ "id": 2, "btnName": "其他" }
		]
		$scope.course = true
		$scope.toggle = function() {
			$scope.pcolor = { color: "#333" }
			$scope.shoufei = false
			$scope.course = !$scope.course
			if($scope.course == false) {
				$scope.lcolor = { color: "#63aafc" }
			} else {
				$scope.lcolor = { color: "#333" }
			}
		}
		$scope.shoufei = false
		$scope.free = function() {
			$scope.course = true
			$scope.lcolor = { color: "#333" }
			if($scope.shoufei == false) {
				$scope.shoufei = true
				$scope.pcolor = { color: "#63aafc" }
			} else {
				$scope.shoufei = false
				$scope.pcolor = { color: "#333" }
			}

		}
		//   $scope.moredata=true
		//   加载更多数据
		$scope.loadMore = function() {
			var newList = $courseLists.page(1)
			$scope.courselist = $scope.courselist.concat(newList)
			//   	if(newList.length==0){
			//   	   $scope.moredata=false
			//   	}
			$scope.$broadcast("scroll.infiniteScrollComplete")
		}
		//加载更多事件
		//   $scope.$on("$stateChangeSuccess",function(){
		//   	$scope.loadMore()
		//   })
		//课程列表筛选事件
		$scope.courseSerch = function(searchText) {
			$scope.courselist = $courseLists.courseSerch(searchText);
			$scope.course = true
		}
		//价格筛选事件
		$scope.priceSerch = function(searchText) {
			$scope.courselist = $courseLists.courseSerch(searchText);
			$scope.shoufei = false
		}
	})

	.controller('mycourseCtrl', function($scope, $courseFirst, $courseSecond) {
		$scope.itemFir = $courseFirst.all()
		$scope.itemSec = $courseSecond.all()
		$scope.data = {
			showDelete: false
		};
		$scope.share = function(temp) {
			alert('Share Item: ' + temp.id);
		};
		$scope.onItemDelete = function(temp) {
			$scope.itemFir.splice($scope.itemFir.indexOf(temp), 1);
		};
		//我的课程
		$scope.mycou = true
		$scope.mycol = false
		$scope.color = { color: "#333" }
		$scope.colorc = { color: "#333" }
		$scope.mylesson = function() {
			$scope.data.showDelete = false
			$scope.mycou = true
			$scope.mycol = false
			$scope.color = { color: "#63aafc" }
			$scope.colorc = { color: "#333" }
		}
		//收藏课程
		$scope.course = function() {
			$scope.data.showDelete = false
			$scope.mycou = false
			$scope.mycol = true
			$scope.color = { color: "#333" }
			$scope.colorc = { color: "#63aafc" }
		}
	})

	.controller('personalCtrl', function($scope, $state) {
		$scope.jump = function() {
			$state.go("tab.information")
		}

	})

	.controller('registerCtrl', function($scope) {

	})
	.controller('informationCtrl', function($scope) {

	})
	.directive('hideTabs', function($rootScope) {
		return {
			restrict: 'A',
			link: function(scope, element, attributes) {
				scope.$on('$ionicView.beforeEnter', function() {
					$rootScope.hideTabs = attributes.hideTabs;
				});

				scope.$on('$ionicView.beforeLeave', function() {
					$rootScope.hideTabs = false;
				});
			}
		};
	});
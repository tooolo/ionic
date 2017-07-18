// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

	.run(['$ionicPlatform', '$rootScope','$location','$ionicHistory', 
function($ionicPlatform, $rootScope, $location,$ionicHistory) { 
  $ionicPlatform.ready(function() { 
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    
    // for form inputs) 
    if (window.cordova && window.cordova.plugins && 
window.cordova.plugins.Keyboard) { 
cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true); 
cordova.plugins.Keyboard.disableScroll(true); 
    } 
    if (window.StatusBar) { 
// org.apache.cordova.statusbar required 
StatusBar.styleDefault(); 
    } 
  }); 
  //安卓物理按键返回，以及双击退出 
  $ionicPlatform.registerBackButtonAction(function (e) { 
    //判断处于哪个页面时双击退出 
    if ($location.path() == '/tab/home') { 
if ($rootScope.backButtonPressedOnceToExit) { 
ionic.Platform.exitApp(); 
} else { 
$rootScope.backButtonPressedOnceToExit = true; 
setTimeout(function () { 
  $rootScope.backButtonPressedOnceToExit = false; 
}, 2000); 
} 
    } 
    else if ($ionicHistory.backView()) { 
$ionicHistory.goBack(); 
    } else { 
$rootScope.backButtonPressedOnceToExit = true; 
setTimeout(function () { 
$rootScope.backButtonPressedOnceToExit = false; 
  }, 2000); 
    } 
    $ionicHistory.backView.go(); 
e.preventDefault();
    return false; 
  }, 101); 
}])

	.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

		$ionicConfigProvider.platform.ios.tabs.style('standard');
		$ionicConfigProvider.platform.ios.tabs.position('bottom');
		$ionicConfigProvider.platform.android.tabs.style('standard');
		$ionicConfigProvider.platform.android.tabs.position('standard');
		$ionicConfigProvider.platform.ios.navBar.alignTitle('center');
		$ionicConfigProvider.platform.android.navBar.alignTitle('left');
		$ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
		$ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');
		$ionicConfigProvider.platform.ios.views.transition('ios');
		$ionicConfigProvider.platform.android.views.transition('android');
		// Ionic uses AngularUI Router which uses the concept of states
		// Learn more here: https://github.com/angular-ui/ui-router
		// Set up the various states which the app can be in.
		// Each state's controller can be found in controllers.js
		$stateProvider

			// setup an abstract state for the tabs directive
			.state('tab', {
				url: '/tab',
				abstract: true,
				templateUrl: 'templates/tabs.html'
			})

			// Each tab has its own nav history stack:

			.state('tab.home', {
				url: '/home',
				views: {
					'tab-home': {
						templateUrl: 'templates/tab-home.html',
						controller: 'homeCtrl'
					}
				}
			})

			.state('tab.homestudy', {
				url: '/homestudy/:id',
				views: {
					'tab-home': {
						templateUrl: 'templates/tab-homestudy.html',
						controller: 'homestudyCtrl'
					}
				}
			})

			.state('tab.courselist', {
				url: '/courselist',
				views: {
					'tab-courselist': {
						templateUrl: 'templates/tab-courselist.html',
						controller: 'courselistCtrl'
					}
				}
			})
			.state('tab.mycourse', {
				url: '/mycourse',
				views: {
					'tab-mycourse': {
						templateUrl: 'templates/tab-mycourse.html',
						controller: 'mycourseCtrl'
					}
				}
			})
			.state('tab.personal', {
				url: '/personal',
				views: {
					'tab-personal': {
						templateUrl: 'templates/tab-personal.html',
						controller: 'personalCtrl'
					}
				}
			})

			.state('tab.register', {
				url: '/register',
				views: {
					'tab-personal': {
						templateUrl: 'templates/tab-register.html',
						controller: 'registerCtrl'
					}
				}
			})

			.state('tab.information', {
				url: '/information',
				views: {
					'tab-personal': {
						templateUrl: 'templates/tab-information.html',
						controller: 'informationCtrl'
					}
				}
			});
		// if none of the above states are matched, use this as the fallback
		$urlRouterProvider.otherwise('/tab/home');

	});
!function(){"use strict";var e=["$timeout","$window",function(e,t){return{restrict:"E",link:function(t,n){e(function(){var e=window,t=document,i=t.documentElement,o=t.getElementsByTagName("body")[0],l=(e.innerWidth||i.clientWidth||o.clientWidth,e.innerHeight||i.clientHeight||o.clientHeight),r=n[0].querySelector(".slider"),c=r.getBoundingClientRect(),u=window.getComputedStyle(r),d=angular.element(n[0].querySelectorAll("ion-slide ion-scroll")),a=l-c.top-2*parseInt(u.bottom);d.css("height",a+"px"),angular.element(r).css("bottom","0px")},100)}}}];return angular.module("tabSlideBoxScrollExtension",[]).directive("tabSlideBox",e)}();
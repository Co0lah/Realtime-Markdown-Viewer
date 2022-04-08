require=(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({"markdown":[function(require,module,exports){
var parseBold = function(str) {
    var boldRegExp = /(\*\*)(.*?)\1/;
    var stra = [];
   while ((stra = boldRegExp.exec(str)) !== null) {
      str = str.replace(stra[0], '<b>' + stra[2] + '</b>')
   }
   return str;
   }
  
var parseStrong = function(str) {
  var strongRegExp = /(~~)(.*?)\1/;
  var stra = [];
  while ((stra = strongRegExp.exec(str)) !== null) {
      str = str.replace(stra[0], '<strong>' + stra[2] + '</strong>')
    }
    return str;
}

 var parseHeadline = function(str) {
   var headlineRegExp =  /^(\#{1,6})([^\#\n]+)$/m;
   var stra = [];
   while ((stra = headlineRegExp.exec(str)) !== null) {
     count = stra[1].length;
     str = str.replace(stra[0], '<h' + count + '>' + stra[2] + '</h' + count + '>' + '\n');
   }
   return str;
 }

 var parseHorizontaleLine = function(str) {
  var horizontalRegExp = /^(?:([\*\-_] ?)+)\1\1$/gm;
  var stra = [];
  while ((stra = horizontalRegExp.exec(str)) !== null) {
    str = str.replace(stra[0], '\n<hr/>\n');
  }
  return str;
 }

 var parseLink = function(str) {
   var linkRegExp = /\[([^\[]+)\]\(([^\)]+)\)/;
                  /\[([^\[]+)\]\(([^\)]+)\)/;
   var stra =  [];

   while ((stra = linkRegExp.exec(str)) !== null) {
     str = str.replace(stra[0], '<a ' + 'href="' + stra[2] + '">' + stra[1] + '</a>');
   }
   return str;
 }

var markdown = {
  parse: function (str, strict) {
    'use strict';
    str = parseHeadline(str);
    str = parseHorizontaleLine(str);
    str = parseBold(str);
    str = parseLink(str);
    str = parseStrong(str);
    return str;
  }
};

module.exports = markdown;

},{}]},{},[]);

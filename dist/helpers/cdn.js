'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cdn = function () {
  function Cdn() {
    _classCallCheck(this, Cdn);

    this.host = 'https://gandalf-cdn.herokuapp.com';
  }

  /**
   * Return image url
   * @param  {String} fileName [foo-bar.png]
   * @return {String}
   */


  _createClass(Cdn, [{
    key: 'image',
    value: function image(fileName) {
      return this.host + '/images/' + fileName;
    }
  }]);

  return Cdn;
}();

exports.default = new Cdn();
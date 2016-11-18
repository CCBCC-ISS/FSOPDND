var FSOPDND;
(function (FSOPDND) {
    'use strict';
    var GridItem = (function () {
        function GridItem(element) {
            var _this = this;
            this.move = function (start, end) {
                var x = end.x - start.x, y = end.y - start.y;
                _this._element.style.transform = "translate(" + x + "px, " + y + "px)";
            };
            this.handleTouchEvent = function (e) {
            };
            this.handleMouseEvent = function (e) {
            };
            this._element = element;
        }
        return GridItem;
    }());
    FSOPDND.GridItem = GridItem;
})(FSOPDND || (FSOPDND = {}));
//# sourceMappingURL=GridItem.js.map
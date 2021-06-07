"use strict";
var Components;
(function (Components) {
    var SubComponents;
    (function (SubComponents) {
        var Test = /** @class */ (function () {
            function Test() {
                var elem = document.createElement('div');
                elem.innerText = 'this is Test';
                document.body.appendChild(elem);
            }
            return Test;
        }());
        SubComponents.Test = Test;
    })(SubComponents = Components.SubComponents || (Components.SubComponents = {}));
    var Header = /** @class */ (function () {
        function Header() {
            var elem = document.createElement('div');
            elem.innerText = 'this is Header';
            document.body.appendChild(elem);
        }
        return Header;
    }());
    Components.Header = Header;
    var Content = /** @class */ (function () {
        function Content() {
            var elem = document.createElement('div');
            elem.innerText = 'this is Content';
            document.body.appendChild(elem);
        }
        return Content;
    }());
    Components.Content = Content;
    var Footer = /** @class */ (function () {
        function Footer() {
            var elem = document.createElement('div');
            elem.innerText = 'this is Footer';
            document.body.appendChild(elem);
        }
        return Footer;
    }());
    Components.Footer = Footer;
})(Components || (Components = {}));
define("newComponents", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NewHeader = void 0;
    var NewHeader = /** @class */ (function () {
        function NewHeader() {
            var elem = document.createElement('div');
            elem.innerText = 'this is new Header';
            document.body.appendChild(elem);
        }
        return NewHeader;
    }());
    exports.NewHeader = NewHeader;
});
define("page", ["require", "exports", "newComponents"], function (require, exports, newComponents_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Page = /** @class */ (function () {
        function Page() {
            new newComponents_1.NewHeader();
            new Components.Header();
            new Components.Content();
            new Components.SubComponents.Test();
            new Components.Footer();
        }
        return Page;
    }());
    exports.default = Page;
});

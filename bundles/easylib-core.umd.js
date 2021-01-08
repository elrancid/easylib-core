(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@easylib/core', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.easylib = global.easylib || {}, global.easylib.core = {}), global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    var CoreService = /** @class */ (function () {
        function CoreService() {
        }
        return CoreService;
    }());
    CoreService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CoreService_Factory() { return new CoreService(); }, token: CoreService, providedIn: "root" });
    CoreService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    CoreService.ctorParameters = function () { return []; };

    var CoreComponent = /** @class */ (function () {
        function CoreComponent() {
        }
        CoreComponent.prototype.ngOnInit = function () {
        };
        return CoreComponent;
    }());
    CoreComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'lib-core',
                    template: "\n    <p>\n      core works!\n    </p>\n  "
                },] }
    ];
    CoreComponent.ctorParameters = function () { return []; };

    var CoreModule = /** @class */ (function () {
        function CoreModule() {
        }
        return CoreModule;
    }());
    CoreModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [CoreComponent],
                    imports: [],
                    exports: [CoreComponent]
                },] }
    ];

    /*
     * Public API Surface of core
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CoreComponent = CoreComponent;
    exports.CoreModule = CoreModule;
    exports.CoreService = CoreService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=easylib-core.umd.js.map

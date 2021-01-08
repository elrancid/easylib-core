import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';

class CoreService {
    constructor() { }
}
CoreService.ɵprov = ɵɵdefineInjectable({ factory: function CoreService_Factory() { return new CoreService(); }, token: CoreService, providedIn: "root" });
CoreService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
CoreService.ctorParameters = () => [];

class CoreComponent {
    constructor() { }
    ngOnInit() {
    }
}
CoreComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-core',
                template: `
    <p>
      core works!
    </p>
  `
            },] }
];
CoreComponent.ctorParameters = () => [];

class CoreModule {
}
CoreModule.decorators = [
    { type: NgModule, args: [{
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

export { CoreComponent, CoreModule, CoreService };
//# sourceMappingURL=easylib-core.js.map

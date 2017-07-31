Object.defineProperty(exports, "__esModule", { value: true });
require("tns-core-modules/globals");
// Require application early to work around a circular import
require("tns-core-modules/application");
require("./zone-js/dist/zone-nativescript");
require("reflect-metadata");
require("./polyfills/array");
require("./polyfills/console");
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var renderer_1 = require("./renderer");
var detached_loader_1 = require("./common/detached-loader");
var dialogs_1 = require("./directives/dialogs");
var platform_providers_1 = require("./platform-providers");
var directives_1 = require("./directives");
function errorHandlerFactory() {
    return new core_1.ErrorHandler(true);
}
exports.errorHandlerFactory = errorHandlerFactory;
var NativeScriptModule = (function () {
    function NativeScriptModule() {
    }
    NativeScriptModule = __decorate([
        core_1.NgModule({
            declarations: [
                detached_loader_1.DetachedLoader,
                dialogs_1.ModalDialogHost
            ].concat(directives_1.NS_DIRECTIVES),
            providers: [
                dialogs_1.ModalDialogService,
                renderer_1.NativeScriptRendererFactory,
                core_1.SystemJsNgModuleLoader,
                platform_providers_1.defaultDeviceProvider,
                platform_providers_1.defaultFrameProvider,
                platform_providers_1.defaultPageProvider,
                { provide: core_1.ErrorHandler, useFactory: errorHandlerFactory },
                { provide: core_1.RendererFactory2, useClass: renderer_1.NativeScriptRendererFactory },
            ],
            entryComponents: [
                detached_loader_1.DetachedLoader,
            ],
            imports: [
                common_1.CommonModule,
                core_1.ApplicationModule,
            ],
            exports: [
                common_1.CommonModule,
                core_1.ApplicationModule,
                detached_loader_1.DetachedLoader,
                dialogs_1.ModalDialogHost
            ].concat(directives_1.NS_DIRECTIVES),
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], NativeScriptModule);
    return NativeScriptModule;
}());
exports.NativeScriptModule = NativeScriptModule;
//# sourceMappingURL=nativescript.module.js.map
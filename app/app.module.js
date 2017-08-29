"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var cost_module_1 = require("./tabs/cost/cost.module");
var calendar_module_1 = require("./tabs/calendar/calendar.module");
var tabs_component_1 = require("./tabs/tabs.component");
var costs_component_1 = require("./tabs/cost/costs.component");
var login_component_1 = require("./login/login.component");
var register_component_1 = require("./register/register.component");
var calendar_component_1 = require("./tabs/calendar/calendar.component");
var calendar_date_range_component_1 = require("./tabs/calendar/date-range/calendar-date-range.component");
var calendar_date_range_cost_list_component_1 = require("./tabs/calendar/date-range-cost-list/calendar-date-range-cost-list.component");
var list_component_1 = require("./list/list.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [
            app_component_1.AppComponent
        ],
        imports: [
            nativescript_module_1.NativeScriptModule,
            app_routing_1.AppRoutingModule,
            cost_module_1.CostModule,
            calendar_module_1.CalendarModule
        ],
        declarations: [
            app_component_1.AppComponent,
            tabs_component_1.TabsComponent,
            costs_component_1.CostsComponent,
            login_component_1.LoginComponent,
            register_component_1.RegisterComponent,
            calendar_component_1.CalendarComponent,
            calendar_date_range_component_1.CalendarDateRangeComponent,
            calendar_date_range_cost_list_component_1.CalendarDateRangeCostListComponent,
            list_component_1.ListComponent
        ],
        providers: [],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBRTlFLDZDQUFpRDtBQUNqRCxpREFBK0M7QUFDL0MsdURBQXFEO0FBQ3JELG1FQUFnRTtBQUdoRSx3REFBc0Q7QUFDdEQsK0RBQTZEO0FBQzdELDJEQUF3RDtBQUN4RCxvRUFBaUU7QUFDakUseUVBQXNFO0FBRXRFLDBHQUFzRztBQUN0Ryx3SUFBa0k7QUFDbEksd0RBQXNEO0FBOEJ0RCxJQUFhLFNBQVM7SUFBdEI7SUFBeUIsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQUExQixJQUEwQjtBQUFiLFNBQVM7SUE1QnJCLGVBQVEsQ0FBQztRQUNOLFNBQVMsRUFBRTtZQUNQLDRCQUFZO1NBQ2Y7UUFDRCxPQUFPLEVBQUU7WUFDTCx3Q0FBa0I7WUFDbEIsOEJBQWdCO1lBQ2hCLHdCQUFVO1lBQ1YsZ0NBQWM7U0FDakI7UUFDRCxZQUFZLEVBQUU7WUFDViw0QkFBWTtZQUNaLDhCQUFhO1lBQ2IsZ0NBQWM7WUFDZCxnQ0FBYztZQUNkLHNDQUFpQjtZQUNqQixzQ0FBaUI7WUFDakIsMERBQTBCO1lBQzFCLDRFQUFrQztZQUNsQyw4QkFBYTtTQUNoQjtRQUNELFNBQVMsRUFBRSxFQUNWO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsdUJBQWdCO1NBQ25CO0tBQ0osQ0FBQztHQUVXLFNBQVMsQ0FBSTtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xyXG5cclxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ29zdE1vZHVsZSB9IGZyb20gXCIuL3RhYnMvY29zdC9jb3N0Lm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBDYWxlbmRhck1vZHVsZSB9IGZyb20gXCIuL3RhYnMvY2FsZW5kYXIvY2FsZW5kYXIubW9kdWxlXCJcclxuXHJcblxyXG5pbXBvcnQgeyBUYWJzQ29tcG9uZW50IH0gZnJvbSBcIi4vdGFicy90YWJzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDb3N0c0NvbXBvbmVudCB9IGZyb20gXCIuL3RhYnMvY29zdC9jb3N0cy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTG9naW5Db21wb25lbnR9IGZyb20gXCIuL2xvZ2luL2xvZ2luLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBSZWdpc3RlckNvbXBvbmVudH0gZnJvbSBcIi4vcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENhbGVuZGFyQ29tcG9uZW50fSBmcm9tIFwiLi90YWJzL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgQ2FsZW5kYXJEYXRlUmFuZ2VDb21wb25lbnQgfSBmcm9tIFwiLi90YWJzL2NhbGVuZGFyL2RhdGUtcmFuZ2UvY2FsZW5kYXItZGF0ZS1yYW5nZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ2FsZW5kYXJEYXRlUmFuZ2VDb3N0TGlzdENvbXBvbmVudCB9IGZyb20gXCIuL3RhYnMvY2FsZW5kYXIvZGF0ZS1yYW5nZS1jb3N0LWxpc3QvY2FsZW5kYXItZGF0ZS1yYW5nZS1jb3N0LWxpc3QuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IExpc3RDb21wb25lbnQgfSBmcm9tIFwiLi9saXN0L2xpc3QuY29tcG9uZW50XCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgYm9vdHN0cmFwOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcclxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxyXG4gICAgICAgIENvc3RNb2R1bGUsXHJcbiAgICAgICAgQ2FsZW5kYXJNb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBBcHBDb21wb25lbnQsXHJcbiAgICAgICAgVGFic0NvbXBvbmVudCxcclxuICAgICAgICBDb3N0c0NvbXBvbmVudCxcclxuICAgICAgICBMb2dpbkNvbXBvbmVudCxcclxuICAgICAgICBSZWdpc3RlckNvbXBvbmVudCxcclxuICAgICAgICBDYWxlbmRhckNvbXBvbmVudCxcclxuICAgICAgICBDYWxlbmRhckRhdGVSYW5nZUNvbXBvbmVudCxcclxuICAgICAgICBDYWxlbmRhckRhdGVSYW5nZUNvc3RMaXN0Q29tcG9uZW50LFxyXG4gICAgICAgIExpc3RDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cclxuIl19
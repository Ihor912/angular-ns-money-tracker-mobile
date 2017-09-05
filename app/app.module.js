"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var cost_module_1 = require("./tabs/cost/cost.module");
var calendar_module_1 = require("./tabs/calendar/calendar.module");
var budget_module_1 = require("./budget/budget.module");
var tabs_component_1 = require("./tabs/tabs.component");
var costs_component_1 = require("./tabs/cost/costs.component");
var login_component_1 = require("./login/login.component");
var register_component_1 = require("./register/register.component");
var calendar_component_1 = require("./tabs/calendar/calendar.component");
var calendar_date_range_component_1 = require("./tabs/calendar/date-range/calendar-date-range.component");
var calendar_date_range_cost_list_component_1 = require("./tabs/calendar/date-range-cost-list/calendar-date-range-cost-list.component");
var list_component_1 = require("./list/list.component");
var chart_component_1 = require("./tabs/charts/chart.component");
var budget_component_1 = require("./budget/budget.component");
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
            calendar_module_1.CalendarModule,
            budget_module_1.BudgetModule
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
            list_component_1.ListComponent,
            chart_component_1.ChartComponent,
            budget_component_1.BudgetComponent
        ],
        providers: [],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBRTlFLDZDQUFpRDtBQUNqRCxpREFBK0M7QUFDL0MsdURBQXFEO0FBQ3JELG1FQUFnRTtBQUNoRSx3REFBc0Q7QUFHdEQsd0RBQXNEO0FBQ3RELCtEQUE2RDtBQUM3RCwyREFBd0Q7QUFDeEQsb0VBQWlFO0FBQ2pFLHlFQUFzRTtBQUV0RSwwR0FBc0c7QUFDdEcsd0lBQWtJO0FBQ2xJLHdEQUFzRDtBQUN0RCxpRUFBK0Q7QUFDL0QsOERBQTREO0FBaUM1RCxJQUFhLFNBQVM7SUFBdEI7SUFBeUIsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQUExQixJQUEwQjtBQUFiLFNBQVM7SUEvQnJCLGVBQVEsQ0FBQztRQUNOLFNBQVMsRUFBRTtZQUNQLDRCQUFZO1NBQ2Y7UUFDRCxPQUFPLEVBQUU7WUFDTCx3Q0FBa0I7WUFDbEIsOEJBQWdCO1lBQ2hCLHdCQUFVO1lBQ1YsZ0NBQWM7WUFDZCw0QkFBWTtTQUNmO1FBQ0QsWUFBWSxFQUFFO1lBQ1YsNEJBQVk7WUFDWiw4QkFBYTtZQUNiLGdDQUFjO1lBQ2QsZ0NBQWM7WUFDZCxzQ0FBaUI7WUFDakIsc0NBQWlCO1lBQ2pCLDBEQUEwQjtZQUMxQiw0RUFBa0M7WUFDbEMsOEJBQWE7WUFDYixnQ0FBYztZQUNkLGtDQUFlO1NBQ2xCO1FBQ0QsU0FBUyxFQUFFLEVBQ1Y7UUFDRCxPQUFPLEVBQUU7WUFDTCx1QkFBZ0I7U0FDbkI7S0FDSixDQUFDO0dBRVcsU0FBUyxDQUFJO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XHJcblxyXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDb3N0TW9kdWxlIH0gZnJvbSBcIi4vdGFicy9jb3N0L2Nvc3QubW9kdWxlXCI7XHJcbmltcG9ydCB7IENhbGVuZGFyTW9kdWxlIH0gZnJvbSBcIi4vdGFicy9jYWxlbmRhci9jYWxlbmRhci5tb2R1bGVcIlxyXG5pbXBvcnQgeyBCdWRnZXRNb2R1bGUgfSBmcm9tIFwiLi9idWRnZXQvYnVkZ2V0Lm1vZHVsZVwiO1xyXG4gXHJcblxyXG5pbXBvcnQgeyBUYWJzQ29tcG9uZW50IH0gZnJvbSBcIi4vdGFicy90YWJzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDb3N0c0NvbXBvbmVudCB9IGZyb20gXCIuL3RhYnMvY29zdC9jb3N0cy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTG9naW5Db21wb25lbnR9IGZyb20gXCIuL2xvZ2luL2xvZ2luLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBSZWdpc3RlckNvbXBvbmVudH0gZnJvbSBcIi4vcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENhbGVuZGFyQ29tcG9uZW50fSBmcm9tIFwiLi90YWJzL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgQ2FsZW5kYXJEYXRlUmFuZ2VDb21wb25lbnQgfSBmcm9tIFwiLi90YWJzL2NhbGVuZGFyL2RhdGUtcmFuZ2UvY2FsZW5kYXItZGF0ZS1yYW5nZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ2FsZW5kYXJEYXRlUmFuZ2VDb3N0TGlzdENvbXBvbmVudCB9IGZyb20gXCIuL3RhYnMvY2FsZW5kYXIvZGF0ZS1yYW5nZS1jb3N0LWxpc3QvY2FsZW5kYXItZGF0ZS1yYW5nZS1jb3N0LWxpc3QuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IExpc3RDb21wb25lbnQgfSBmcm9tIFwiLi9saXN0L2xpc3QuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENoYXJ0Q29tcG9uZW50IH0gZnJvbSBcIi4vdGFicy9jaGFydHMvY2hhcnQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEJ1ZGdldENvbXBvbmVudCB9IGZyb20gXCIuL2J1ZGdldC9idWRnZXQuY29tcG9uZW50XCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgYm9vdHN0cmFwOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcclxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxyXG4gICAgICAgIENvc3RNb2R1bGUsXHJcbiAgICAgICAgQ2FsZW5kYXJNb2R1bGUsXHJcbiAgICAgICAgQnVkZ2V0TW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50LFxyXG4gICAgICAgIFRhYnNDb21wb25lbnQsXHJcbiAgICAgICAgQ29zdHNDb21wb25lbnQsXHJcbiAgICAgICAgTG9naW5Db21wb25lbnQsXHJcbiAgICAgICAgUmVnaXN0ZXJDb21wb25lbnQsXHJcbiAgICAgICAgQ2FsZW5kYXJDb21wb25lbnQsXHJcbiAgICAgICAgQ2FsZW5kYXJEYXRlUmFuZ2VDb21wb25lbnQsXHJcbiAgICAgICAgQ2FsZW5kYXJEYXRlUmFuZ2VDb3N0TGlzdENvbXBvbmVudCxcclxuICAgICAgICBMaXN0Q29tcG9uZW50LFxyXG4gICAgICAgIENoYXJ0Q29tcG9uZW50LFxyXG4gICAgICAgIEJ1ZGdldENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgXSxcclxuICAgIHNjaGVtYXM6IFtcclxuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXHJcbiAgICBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxyXG4iXX0=
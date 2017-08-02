"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var cost_service_1 = require("./cost.service");
var CostDetailComponent = (function () {
    function CostDetailComponent(costService, route) {
        this.costService = costService;
        this.route = route;
    }
    CostDetailComponent.prototype.ngOnInit = function () {
        var id = +this.route.snapshot.params["id"];
        this.cost = this.costService.getCost(id);
    };
    return CostDetailComponent;
}());
CostDetailComponent = __decorate([
    core_1.Component({
        selector: "details",
        moduleId: module.id,
        templateUrl: "./cost-detail.component.html",
        styleUrls: ["./cost-detail.component.css"]
    }),
    __metadata("design:paramtypes", [cost_service_1.CostService,
        router_1.ActivatedRoute])
], CostDetailComponent);
exports.CostDetailComponent = CostDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29zdC1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29zdC1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUFpRDtBQUdqRCwrQ0FBNkM7QUFRN0MsSUFBYSxtQkFBbUI7SUFHNUIsNkJBQ1ksV0FBd0IsRUFDeEIsS0FBcUI7UUFEckIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7SUFDN0IsQ0FBQztJQUVMLHNDQUFRLEdBQVI7UUFDSSxJQUFNLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDTCwwQkFBQztBQUFELENBQUMsQUFaRCxJQVlDO0FBWlksbUJBQW1CO0lBTi9CLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsU0FBUztRQUNuQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLDhCQUE4QjtRQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztLQUM3QyxDQUFDO3FDQUsyQiwwQkFBVztRQUNqQix1QkFBYztHQUx4QixtQkFBbUIsQ0FZL0I7QUFaWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgQ29zdCB9IGZyb20gXCIuL2Nvc3RcIjtcbmltcG9ydCB7IENvc3RTZXJ2aWNlIH0gZnJvbSBcIi4vY29zdC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImRldGFpbHNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vY29zdC1kZXRhaWwuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vY29zdC1kZXRhaWwuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBDb3N0RGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBjb3N0OiBDb3N0O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgY29zdFNlcnZpY2U6IENvc3RTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxuICAgICkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaWQgPSArdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbXCJpZFwiXTtcbiAgICAgICAgdGhpcy5jb3N0ID0gdGhpcy5jb3N0U2VydmljZS5nZXRDb3N0KGlkKTtcbiAgICB9XG59XG4iXX0=
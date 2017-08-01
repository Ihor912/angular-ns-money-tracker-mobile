"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var cost_1 = require("./cost");
var cost_service_1 = require("./cost.service");
var CostsComponent = (function () {
    function CostsComponent(costService) {
        this.costService = costService;
        this.newCost = '';
    }
    CostsComponent.prototype.ngOnInit = function () {
        this.costs = this.costService.getCosts();
    };
    CostsComponent.prototype.add = function () {
        if (this.newCost.trim() === "") {
            alert("Enter a grocery item");
            return;
        }
        // Dismiss the keyboard
        var textField = this.newCostTextField.nativeElement;
        textField.dismissSoftInput();
        var cost = new cost_1.Cost();
        cost.id = this.costs.length;
        cost.quantity = Number(this.newCost);
        cost.type = "TestType";
        this.costService.addCost(cost);
        this.costs.push(cost);
        this.newCost = "";
    };
    return CostsComponent;
}());
__decorate([
    core_1.ViewChild("newCostTextField"),
    __metadata("design:type", core_1.ElementRef)
], CostsComponent.prototype, "newCostTextField", void 0);
CostsComponent = __decorate([
    core_1.Component({
        selector: "costs",
        moduleId: module.id,
        templateUrl: "./costs.component.html",
        styleUrls: ["./cost.component.css"]
    }),
    __metadata("design:paramtypes", [cost_service_1.CostService])
], CostsComponent);
exports.CostsComponent = CostsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29zdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29zdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBR3pFLCtCQUE4QjtBQUM5QiwrQ0FBNkM7QUFRN0MsSUFBYSxjQUFjO0lBTXZCLHdCQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUo1QyxZQUFPLEdBQVcsRUFBRSxDQUFDO0lBSTJCLENBQUM7SUFFakQsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBRUQsNEJBQUcsR0FBSDtRQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM3QixLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUM5QixNQUFNLENBQUM7UUFDWCxDQUFDO1FBRUQsdUJBQXVCO1FBQ3ZCLElBQUksU0FBUyxHQUFjLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7UUFDL0QsU0FBUyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFFN0IsSUFBSSxJQUFJLEdBQVEsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztRQUV2QixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDLEFBL0JELElBK0JDO0FBM0JrQztJQUE5QixnQkFBUyxDQUFDLGtCQUFrQixDQUFDOzhCQUFtQixpQkFBVTt3REFBQztBQUpuRCxjQUFjO0lBTjFCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsT0FBTztRQUNqQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtRQUNyQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztLQUN0QyxDQUFDO3FDQU9tQywwQkFBVztHQU5uQyxjQUFjLENBK0IxQjtBQS9CWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInVpL3RleHQtZmllbGRcIjtcblxuaW1wb3J0IHsgQ29zdCB9IGZyb20gXCIuL2Nvc3RcIjtcbmltcG9ydCB7IENvc3RTZXJ2aWNlIH0gZnJvbSBcIi4vY29zdC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImNvc3RzXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2Nvc3RzLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2Nvc3QuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBDb3N0c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgY29zdHM6IENvc3RbXTtcbiAgICBuZXdDb3N0OiBzdHJpbmcgPSAnJztcblxuICAgIEBWaWV3Q2hpbGQoXCJuZXdDb3N0VGV4dEZpZWxkXCIpIG5ld0Nvc3RUZXh0RmllbGQ6IEVsZW1lbnRSZWY7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvc3RTZXJ2aWNlOiBDb3N0U2VydmljZSkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jb3N0cyA9IHRoaXMuY29zdFNlcnZpY2UuZ2V0Q29zdHMoKTtcbiAgICB9XG5cbiAgICBhZGQoKSB7XG4gICAgICAgIGlmICh0aGlzLm5ld0Nvc3QudHJpbSgpID09PSBcIlwiKSB7XG4gICAgICAgICAgICBhbGVydChcIkVudGVyIGEgZ3JvY2VyeSBpdGVtXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGlzbWlzcyB0aGUga2V5Ym9hcmRcbiAgICAgICAgbGV0IHRleHRGaWVsZCA9IDxUZXh0RmllbGQ+dGhpcy5uZXdDb3N0VGV4dEZpZWxkLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHRleHRGaWVsZC5kaXNtaXNzU29mdElucHV0KCk7XG5cbiAgICAgICAgbGV0IGNvc3Q6Q29zdCA9IG5ldyBDb3N0KCk7XG4gICAgICAgIGNvc3QuaWQgPSB0aGlzLmNvc3RzLmxlbmd0aDtcbiAgICAgICAgY29zdC5xdWFudGl0eSA9IE51bWJlcih0aGlzLm5ld0Nvc3QpO1xuICAgICAgICBjb3N0LnR5cGUgPSBcIlRlc3RUeXBlXCI7XG5cbiAgICAgICAgdGhpcy5jb3N0U2VydmljZS5hZGRDb3N0KGNvc3QpO1xuICAgICAgICB0aGlzLmNvc3RzLnB1c2goY29zdCk7XG4gICAgICAgIHRoaXMubmV3Q29zdCA9IFwiXCI7XG4gICAgfVxufSJdfQ==
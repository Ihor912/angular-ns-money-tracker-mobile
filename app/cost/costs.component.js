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
        // this.costService.costsListObservable.subscribe((costs) => {
        //     if(costs) {
        //         this.costs = costs;
        //     }
        // });
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
        cost.id = 234;
        cost.quantity = Number(this.newCost);
        cost.type = "TestType";
        this.costService.addCost(cost);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29zdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29zdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBR3pFLCtCQUE4QjtBQUM5QiwrQ0FBNkM7QUFRN0MsSUFBYSxjQUFjO0lBS3ZCLHdCQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUo1QyxZQUFPLEdBQVcsRUFBRSxDQUFDO0lBSTJCLENBQUM7SUFFakQsaUNBQVEsR0FBUjtRQUNJLDhEQUE4RDtRQUM5RCxrQkFBa0I7UUFDbEIsOEJBQThCO1FBQzlCLFFBQVE7UUFDUixNQUFNO0lBQ1YsQ0FBQztJQUVELDRCQUFHLEdBQUg7UUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDN0IsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDOUIsTUFBTSxDQUFDO1FBQ1gsQ0FBQztRQUVELHVCQUF1QjtRQUN2QixJQUFJLFNBQVMsR0FBYyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO1FBQy9ELFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBRTdCLElBQUksSUFBSSxHQUFRLElBQUksV0FBSSxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUM7UUFDZCxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7UUFFdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQWpDRCxJQWlDQztBQTlCa0M7SUFBOUIsZ0JBQVMsQ0FBQyxrQkFBa0IsQ0FBQzs4QkFBbUIsaUJBQVU7d0RBQUM7QUFIbkQsY0FBYztJQU4xQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE9BQU87UUFDakIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSx3QkFBd0I7UUFDckMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7S0FDdEMsQ0FBQztxQ0FNbUMsMEJBQVc7R0FMbkMsY0FBYyxDQWlDMUI7QUFqQ1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XG5cbmltcG9ydCB7IENvc3QgfSBmcm9tIFwiLi9jb3N0XCI7XG5pbXBvcnQgeyBDb3N0U2VydmljZSB9IGZyb20gXCIuL2Nvc3Quc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJjb3N0c1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jb3N0cy5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9jb3N0LmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgQ29zdHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIG5ld0Nvc3Q6IHN0cmluZyA9ICcnO1xuXG4gICAgQFZpZXdDaGlsZChcIm5ld0Nvc3RUZXh0RmllbGRcIikgbmV3Q29zdFRleHRGaWVsZDogRWxlbWVudFJlZjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY29zdFNlcnZpY2U6IENvc3RTZXJ2aWNlKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICAvLyB0aGlzLmNvc3RTZXJ2aWNlLmNvc3RzTGlzdE9ic2VydmFibGUuc3Vic2NyaWJlKChjb3N0cykgPT4ge1xuICAgICAgICAvLyAgICAgaWYoY29zdHMpIHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmNvc3RzID0gY29zdHM7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0pO1xuICAgIH1cblxuICAgIGFkZCgpIHtcbiAgICAgICAgaWYgKHRoaXMubmV3Q29zdC50cmltKCkgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiRW50ZXIgYSBncm9jZXJ5IGl0ZW1cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEaXNtaXNzIHRoZSBrZXlib2FyZFxuICAgICAgICBsZXQgdGV4dEZpZWxkID0gPFRleHRGaWVsZD50aGlzLm5ld0Nvc3RUZXh0RmllbGQubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGV4dEZpZWxkLmRpc21pc3NTb2Z0SW5wdXQoKTtcblxuICAgICAgICBsZXQgY29zdDpDb3N0ID0gbmV3IENvc3QoKTtcbiAgICAgICAgY29zdC5pZCA9IDIzNDtcbiAgICAgICAgY29zdC5xdWFudGl0eSA9IE51bWJlcih0aGlzLm5ld0Nvc3QpO1xuICAgICAgICBjb3N0LnR5cGUgPSBcIlRlc3RUeXBlXCI7XG5cbiAgICAgICAgdGhpcy5jb3N0U2VydmljZS5hZGRDb3N0KGNvc3QpO1xuICAgICAgICB0aGlzLm5ld0Nvc3QgPSBcIlwiO1xuICAgIH1cbn0iXX0=
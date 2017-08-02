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
        cost.id = Math.random();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29zdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29zdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBR3pFLCtCQUE4QjtBQUM5QiwrQ0FBNkM7QUFRN0MsSUFBYSxjQUFjO0lBS3ZCLHdCQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUo1QyxZQUFPLEdBQVcsRUFBRSxDQUFDO0lBSTJCLENBQUM7SUFFakQsaUNBQVEsR0FBUjtRQUNJLDhEQUE4RDtRQUM5RCxrQkFBa0I7UUFDbEIsOEJBQThCO1FBQzlCLFFBQVE7UUFDUixNQUFNO0lBQ1YsQ0FBQztJQUVELDRCQUFHLEdBQUg7UUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDN0IsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDOUIsTUFBTSxDQUFDO1FBQ1gsQ0FBQztRQUVELHVCQUF1QjtRQUN2QixJQUFJLFNBQVMsR0FBYyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO1FBQy9ELFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBRTdCLElBQUksSUFBSSxHQUFRLElBQUksV0FBSSxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO1FBRXZCLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFDTCxxQkFBQztBQUFELENBQUMsQUFqQ0QsSUFpQ0M7QUE5QmtDO0lBQTlCLGdCQUFTLENBQUMsa0JBQWtCLENBQUM7OEJBQW1CLGlCQUFVO3dEQUFDO0FBSG5ELGNBQWM7SUFOMUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsd0JBQXdCO1FBQ3JDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO0tBQ3RDLENBQUM7cUNBTW1DLDBCQUFXO0dBTG5DLGNBQWMsQ0FpQzFCO0FBakNZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xuXG5pbXBvcnQgeyBDb3N0IH0gZnJvbSBcIi4vY29zdFwiO1xuaW1wb3J0IHsgQ29zdFNlcnZpY2UgfSBmcm9tIFwiLi9jb3N0LnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiY29zdHNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vY29zdHMuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vY29zdC5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIENvc3RzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBuZXdDb3N0OiBzdHJpbmcgPSAnJztcblxuICAgIEBWaWV3Q2hpbGQoXCJuZXdDb3N0VGV4dEZpZWxkXCIpIG5ld0Nvc3RUZXh0RmllbGQ6IEVsZW1lbnRSZWY7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvc3RTZXJ2aWNlOiBDb3N0U2VydmljZSkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgLy8gdGhpcy5jb3N0U2VydmljZS5jb3N0c0xpc3RPYnNlcnZhYmxlLnN1YnNjcmliZSgoY29zdHMpID0+IHtcbiAgICAgICAgLy8gICAgIGlmKGNvc3RzKSB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jb3N0cyA9IGNvc3RzO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9KTtcbiAgICB9XG5cbiAgICBhZGQoKSB7XG4gICAgICAgIGlmICh0aGlzLm5ld0Nvc3QudHJpbSgpID09PSBcIlwiKSB7XG4gICAgICAgICAgICBhbGVydChcIkVudGVyIGEgZ3JvY2VyeSBpdGVtXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGlzbWlzcyB0aGUga2V5Ym9hcmRcbiAgICAgICAgbGV0IHRleHRGaWVsZCA9IDxUZXh0RmllbGQ+dGhpcy5uZXdDb3N0VGV4dEZpZWxkLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHRleHRGaWVsZC5kaXNtaXNzU29mdElucHV0KCk7XG5cbiAgICAgICAgbGV0IGNvc3Q6Q29zdCA9IG5ldyBDb3N0KCk7XG4gICAgICAgIGNvc3QuaWQgPSBNYXRoLnJhbmRvbSgpO1xuICAgICAgICBjb3N0LnF1YW50aXR5ID0gTnVtYmVyKHRoaXMubmV3Q29zdCk7XG4gICAgICAgIGNvc3QudHlwZSA9IFwiVGVzdFR5cGVcIjtcblxuICAgICAgICB0aGlzLmNvc3RTZXJ2aWNlLmFkZENvc3QoY29zdCk7XG4gICAgICAgIHRoaXMubmV3Q29zdCA9IFwiXCI7XG4gICAgfVxufSJdfQ==
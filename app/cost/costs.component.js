"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var cost_service_1 = require("./cost.service");
var CostsComponent = (function () {
    function CostsComponent(costService) {
        this.costService = costService;
    }
    CostsComponent.prototype.ngOnInit = function () {
        this.costs = this.costService.getCosts();
    };
    return CostsComponent;
}());
CostsComponent = __decorate([
    core_1.Component({
        selector: "costs",
        moduleId: module.id,
        templateUrl: "./costs.component.html",
    }),
    __metadata("design:paramtypes", [cost_service_1.CostService])
], CostsComponent);
exports.CostsComponent = CostsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29zdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29zdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBR2xELCtDQUE2QztBQU83QyxJQUFhLGNBQWM7SUFHdkIsd0JBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUksQ0FBQztJQUVqRCxpQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFDTCxxQkFBQztBQUFELENBQUMsQUFSRCxJQVFDO0FBUlksY0FBYztJQUwxQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE9BQU87UUFDakIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSx3QkFBd0I7S0FDeEMsQ0FBQztxQ0FJbUMsMEJBQVc7R0FIbkMsY0FBYyxDQVExQjtBQVJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBDb3N0IH0gZnJvbSBcIi4vY29zdFwiO1xuaW1wb3J0IHsgQ29zdFNlcnZpY2UgfSBmcm9tIFwiLi9jb3N0LnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiY29zdHNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vY29zdHMuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgQ29zdHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGNvc3RzOiBDb3N0W107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvc3RTZXJ2aWNlOiBDb3N0U2VydmljZSkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jb3N0cyA9IHRoaXMuY29zdFNlcnZpY2UuZ2V0Q29zdHMoKTtcbiAgICB9XG59Il19
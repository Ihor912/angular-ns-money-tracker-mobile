"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CostService = (function () {
    function CostService() {
        this.costs = new Array({ id: 0, quantity: 310, type: "Products" });
    }
    CostService.prototype.getCosts = function () {
        return this.costs;
    };
    CostService.prototype.getCost = function (id) {
        return this.costs.filter(function (cost) { return cost.id === id; })[0];
    };
    return CostService;
}());
CostService = __decorate([
    core_1.Injectable()
], CostService);
exports.CostService = CostService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29zdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29zdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBSzNDLElBQWEsV0FBVztJQUR4QjtRQUVZLFVBQUssR0FBRyxJQUFJLEtBQUssQ0FDckIsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUM3QyxDQUFDO0lBU04sQ0FBQztJQVBHLDhCQUFRLEdBQVI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQsNkJBQU8sR0FBUCxVQUFRLEVBQVU7UUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBZCxDQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQztBQVpZLFdBQVc7SUFEdkIsaUJBQVUsRUFBRTtHQUNBLFdBQVcsQ0FZdkI7QUFaWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBDb3N0IH0gZnJvbSBcIi4vY29zdFwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29zdFNlcnZpY2Uge1xuICAgIHByaXZhdGUgY29zdHMgPSBuZXcgQXJyYXk8Q29zdD4oXG4gICAgICAgIHsgaWQ6IDAsIHF1YW50aXR5OiAzMTAsIHR5cGU6IFwiUHJvZHVjdHNcIiB9XG4gICAgKTtcblxuICAgIGdldENvc3RzKCk6IENvc3RbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvc3RzO1xuICAgIH1cblxuICAgIGdldENvc3QoaWQ6IG51bWJlcik6IENvc3Qge1xuICAgICAgICByZXR1cm4gdGhpcy5jb3N0cy5maWx0ZXIoY29zdCA9PiBjb3N0LmlkID09PSBpZClbMF07XG4gICAgfVxufVxuIl19
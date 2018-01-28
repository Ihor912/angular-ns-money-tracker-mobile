import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';

import { Cost } from '../../../common/protocol';
import { CostService } from '../cost.service';
import { Utils } from '../../../common/utils';

@Component({
    selector: "details",
    moduleId: module.id,
    templateUrl: "./cost-detail.component.html",
    styleUrls: ["./cost-detail.component.css"]
})
export class CostDetailComponent implements OnInit {
    cost: Cost;
    
    constructor(
        private costService: CostService,
        private route: ActivatedRoute,
        private routerExtensions: RouterExtensions
    ) { }

    ngOnInit(): void {
        const id = this.route.snapshot.params["id"];
        this.cost = this.costService.getCost(id);
        console.log(JSON.stringify(this.cost));
    }

    onEditButtonTap(): void{
        this.routerExtensions.navigate(["/cost-edit", this.cost.id],
        {
            animated: true,
            transition: {
                name: "slideTop",
                duration: 200,
                curve: "ease"
            }
        });
    }

    onDeleteButtonTap(): void{
        this.costService.deleteCost(this.cost);
        this.routerExtensions.back();
    }

    onTap() {
        this.cost.isFavorite = !this.cost.isFavorite;
    }

    private formatChangesDate(changesDate: string) {
        let date = new Date(changesDate).toLocaleDateString();
        return Utils.formatDateString(date);
    }
}

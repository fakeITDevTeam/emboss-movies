import { Pipe, PipeTransform } from "@angular/core";
import { pipe } from "rxjs";

@Pipe({name: 'profit'})

export class ProfitPipe implements PipeTransform {
    transform(value: number, profitPercentage = 35): string {
        return ((value/2) * profitPercentage * 1/100).toFixed(3); 
    }
}
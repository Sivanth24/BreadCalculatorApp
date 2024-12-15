import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {
  private breadConsumptionPerPerson = 0.5;

  calculateTotalCost(people: number, breadCost: number): number {
    return people * this.breadConsumptionPerPerson * breadCost;
  }

  constructor() { }
}

import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalStateService {

  constructor() { }

  calculationHistory = signal<{ people: number; breadCost: number; totalCost: number }[]>([]);

  addCalculationRecord(people: number, breadCost: number, totalCost: number) {
    this.calculationHistory.update((history) => [
      ...history,
      { people, breadCost, totalCost },
    ]);
  }
}

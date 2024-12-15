import { Injectable, signal } from '@angular/core';

export interface CalculationRecord { 
  id: number; 
  people: number; 
  breadCost: number; 
  totalCost: number 
}

@Injectable({
  providedIn: 'root'
})

export class GlobalStateService {

  constructor() { }

  calculationHistory = signal<CalculationRecord[]>([]);

  addCalculationRecord(record: CalculationRecord) {
    this.calculationHistory.update((history) => [
      ...history,
      record,
    ]);
  }

  clearRecords() {
    this.calculationHistory.update(() => []);
  }
}

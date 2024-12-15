import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalculationService } from '../../../services/calculation.service';
import { CalculationRecord, GlobalStateService } from '../../../services/global-state.service';
import { CommonModule } from '@angular/common';
import { timer } from 'rxjs';

@Component({
  selector: 'app-calculator-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './calculator-form.component.html',
  styleUrl: './calculator-form.component.css',
})
export class CalculatorFormComponent {
  numberOfPeople: number | null = null;
  breadCostPerKilo: number | null = null;
  totalCost: number | null = null;
  disableButton: boolean = false;

  constructor(
    private calcService: CalculationService,
    private globalState: GlobalStateService
  ) {}

  validateInput(field: 'numberOfPeople' | 'breadCostPerKilo') {
    if (this[field] !== null && this[field] <= 0) {
      this[field] = null;
    }
  }

  resetForm() {
    this.numberOfPeople = null;
    this.breadCostPerKilo = null;
    this.totalCost = 0;
    this.disableButton = false;
  }

  calculate() {
    if (this.numberOfPeople !== null && this.breadCostPerKilo !== null) {
      this.disableButton = true;
      this.totalCost = this.calcService.calculateTotalCost(
        this.numberOfPeople,
        this.breadCostPerKilo
      );

      const newRecord: CalculationRecord = {
        id: this.globalState.calculationHistory().length + 1,
        people: this.numberOfPeople,
        breadCost: this.breadCostPerKilo,
        totalCost: this.totalCost
      }

      timer(2000).subscribe(() => {
        this.globalState.addCalculationRecord(newRecord);
        this.resetForm();
      });
    } else {
      alert('Please enter valid values for both fields.');
    }
  }
}

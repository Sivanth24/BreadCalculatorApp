import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalculationService } from '../../../services/calculation.service';
import { GlobalStateService } from '../../../services/global-state.service';
import { CommonModule } from '@angular/common';

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

  constructor(
    private calcService: CalculationService,
    private globalState: GlobalStateService
  ) {}

  validateInput(field: 'numberOfPeople' | 'breadCostPerKilo') {
    if (this[field] !== null && this[field] <= 0) {
      this[field] = null;
    }
  }

  calculate() {
    if (this.numberOfPeople !== null && this.breadCostPerKilo !== null) {
      this.totalCost = this.calcService.calculateTotalCost(
        this.numberOfPeople,
        this.breadCostPerKilo
      );
      this.globalState.addCalculationRecord(
        this.numberOfPeople,
        this.breadCostPerKilo,
        this.totalCost
      );
      this.numberOfPeople = null;
      this.breadCostPerKilo = null;
    } else {
      alert('Please enter valid values for both fields.');
    }
  }
}

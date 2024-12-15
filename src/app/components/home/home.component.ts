import { Component, signal } from '@angular/core';
import { CalculatorFormComponent } from "./calculator-form/calculator-form.component";
import { CalculatorHistoryComponent } from "./calculator-history/calculator-history.component";
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-home',
  imports: [CalculatorFormComponent, CalculatorHistoryComponent, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  calculationHistory = signal<{ people: number; breadCost: number; totalCost: number }[]>([]);

  addCalculationRecord(people: number, breadCost: number, totalCost: number) {
    this.calculationHistory.update((history) => [
      ...history,
      { people, breadCost, totalCost },
    ]);
  }

}

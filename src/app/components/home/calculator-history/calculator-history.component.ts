import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GlobalStateService } from '../../../services/global-state.service';

@Component({
  selector: 'app-calculator-history',
  imports: [CommonModule],
  templateUrl: './calculator-history.component.html',
  styleUrl: './calculator-history.component.css',
})
export class CalculatorHistoryComponent {

  constructor(public globalState: GlobalStateService) {}

}

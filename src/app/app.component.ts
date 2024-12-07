import { Component } from '@angular/core';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component';


@Component({
  selector: 'app-root',
  imports: [BmiCalculatorComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bmi-calculator';
}

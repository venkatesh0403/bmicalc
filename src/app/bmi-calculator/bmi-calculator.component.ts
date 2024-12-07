import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-bmi-calculator',
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
  ],
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.css'],
})
export class BmiCalculatorComponent {
  heightCm: number = 0; 
  weight: number = 0;   
  bmi: number | null = null;  
  category: string = '';

  calculateBMI() {
    if (this.heightCm > 0 && this.weight > 0) {   
      const heightInMeters = this.heightCm / 100;    
      this.bmi = this.weight / (heightInMeters * heightInMeters);
      this.category = this.getBMICategory(this.bmi);
    } else {
      this.bmi = null;
      this.category = '';
    }
  }
  getBMICategory(bmi: number): string {
    if (bmi < 18.5) return 'Underweight';
    if (bmi >= 18.5 && bmi < 24.9) return 'Normal weight';
    if (bmi >= 25 && bmi < 29.9) return 'Overweight';
    return 'Obesity';
  }
}


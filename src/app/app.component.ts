import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  radius !: number;
  height !: number;
  volume !: number;

  startCalc() {
    this.volume = 1.0/3.0*Math.pow(this.radius, 2)*Math.PI*this.height;
    console.log(this.volume);
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colors = ['Aqua', 'Blue', 'Aquamarine', 'DarkCyan', 'SpringGreen', 'PaleGreen'];
  num1 = Math.floor(Math.random() * 6);
  num2 = Math.floor(Math.random() * 6);
  num3 = Math.floor(Math.random() * 6);
  num4 = Math.floor(Math.random() * 6);
  num5 = Math.floor(Math.random() * 6);
  num6 = Math.floor(Math.random() * 6);
}

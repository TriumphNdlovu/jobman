import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() text: string = '';     // Text to display on the button
  @Input() color: string = '';    // Background color for the button
  @Input() width: string = '';    // Width of the button
  @Input() size: string = '';     // Padding for the button
  @Input() radius: string = '';   // Border radius for the button
}

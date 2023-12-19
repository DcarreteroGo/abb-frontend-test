import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  options: string[] = [
    'Custom Dropdown test',
    'Second Dropdown option',
    'Third Dropdown option',
    'Another one',
    'But not less important',
    'The latest option in the dropdown'
  ];
  selectedOption: string | undefined;

  handleOptionSelected(option: string): void {
    this.selectedOption = option;
  }

}

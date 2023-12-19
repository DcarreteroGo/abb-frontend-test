import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss']
})
export class CustomSelectComponent {
  showOptions: boolean = false
  @Input() options: string[] = [];
  @Output() optionSelected = new EventEmitter<string>();
  selectedOption: string | undefined;

  ngOnInit(): void {
    if (this.options.length > 0) {
      this.selectedOption = this.options[0];
      this.emitSelectedOption();
    }
  }

  onSelect(option: string): void {
    this.selectedOption = option;
    this.emitSelectedOption();
  }
  emitSelectedOption() {
    this.optionSelected.emit(this.selectedOption);
  }

  toggleOptions(show:boolean) {
    this.showOptions = show;
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() disabled: boolean = false;
  @Output() clicked: EventEmitter<any> = new EventEmitter();

  click() {
    if (!this.disabled) this.clicked.emit();
  }
}

import { Component, Input, forwardRef } from '@angular/core';
import BaseControlValueAccessor from '../../utils/BaseConrolValueAccessor';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent
  extends BaseControlValueAccessor<string>
  implements ControlValueAccessor
{
  constructor() {
    super();
  }

  @Input() disabled: boolean = false;
  @Input() placeholder: string = '';
  @Input() label: string = '';
}

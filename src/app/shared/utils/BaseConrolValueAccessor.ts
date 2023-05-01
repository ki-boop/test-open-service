import { Component, Input } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  template: '',
})
export default class BaseControlValueAccessor<T>
  implements ControlValueAccessor
{
  private _value: T | null = null;

  @Input() set value(val) {
    if (this.value === null && (val === undefined || val === null)) return;

    this._value = val;

    this.onChange(this._value);
    this.onTouched();
  }

  get value() {
    return this._value;
  }

  writeValue(obj: T | null): void {
    this._value = obj;
  }
  registerOnChange(fn: () => {}): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => {}): void {
    this.registerOnTouched = fn;
  }

  onChange = (_: unknown) => {};

  onTouched = () => {};
}

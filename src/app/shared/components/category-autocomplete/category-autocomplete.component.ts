import {
  Component,
  Input,
  forwardRef,
  EventEmitter,
  Output,
} from '@angular/core';
import BaseControlValueAccessor from '../../utils/BaseConrolValueAccessor';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CategoryModel } from 'src/app/model/category.model';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

export type SelectOption<T = any> = { label: string; value: T };

@Component({
  selector: 'app-category-autocomplete',
  templateUrl: './category-autocomplete.component.html',
  styleUrls: ['./category-autocomplete.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CategoryAutocompleteComponent),
      multi: true,
    },
  ],
})
export class CategoryAutocompleteComponent
  extends BaseControlValueAccessor<CategoryModel>
  implements ControlValueAccessor
{
  constructor() {
    super();
  }

  @Input() disabled: boolean = false;
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() options: CategoryModel[] = [];
  @Output() onSelect = new EventEmitter();
  filteredOptions: CategoryModel[] = [];

  filter(value: string): void {
    const filterValue = value.toLowerCase();

    this.filteredOptions = [
      ...this.options.filter((option) => {
        return option.name.toLowerCase().includes(filterValue);
      }),
    ];
  }

  get valueLabel() {
    return (val: CategoryModel) => {
      return val?.name || '';
    };
  }

  handleSelect(event: MatAutocompleteSelectedEvent) {
    this.onSelect.emit(event.option.value);
  }
}

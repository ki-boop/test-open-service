import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Router } from '@angular/router';
import BaseControlValueAccessor from '../../utils/BaseConrolValueAccessor';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent
  extends BaseControlValueAccessor<string>
  implements ControlValueAccessor
{
  constructor(private router: Router) {
    super();
  }

  @Output() isSearchOpen = new EventEmitter<boolean>();
  @Output() onSearch = new EventEmitter<string>();
  @Input() searchValue: string | null = null;
  @Input() fullMode: boolean = false;
  isOpen: boolean = false;

  onSearchClick() {
    this.isOpen = true;
    this.isSearchOpen.emit(true);
  }

  clickOutSide() {
    if (this.fullMode) return;
    this.isOpen = false;
    this.isSearchOpen.emit(false);
  }

  search() {
    if (this.searchValue) {
      this.searchValue = this.searchValue.trim().replace(/\s+/g, ' ');
      this.router.navigate(['search'], {
        queryParams: { search: this.searchValue },
      });
      if (!this.fullMode) this.searchValue = '';
      this.clickOutSide();
      this.onSearch.emit(this.searchValue);
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { CatalogService } from './modules/catalog/services/catalog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private catalogService: CatalogService) {}
  ngOnInit(): void {
    this.catalogService.fetchAny();
  }
  title = 'test-open-service';
}

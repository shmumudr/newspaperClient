import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { TableData } from '../table-data';
import { NewspaperService } from '../newspaper.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-table',
  imports: [MatTableModule, CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  displayedColumns: string[] = [
    'id',
    'name',
    'demographicExposure',
    'actualExposure',
    'totalPossibleExposure',
  ];
  dataSource: TableData[] = [];
  selectedId: string = '';
  newspaperService: NewspaperService = inject(NewspaperService);

  constructor() {}

  ngOnInit(): void {
    // this.fetchData();
  }

  ngDoCheck() {
    if (
      this.newspaperService.isChange &&
      this.newspaperService.getSelectedId()
    ) {
      this.selectedId = this.newspaperService.getSelectedId();
      this.fetchData();
      this.newspaperService.isChange = false;
    }
  }

  async fetchData() {
    if (this.selectedId) {
      console.log(this.selectedId, 'sssss');
      try {
        const dataSource = await this.newspaperService.getData(this.selectedId);

        this.dataSource = dataSource;
      } catch (error) {
        console.error('rror from fetchdata func:', error);
      }
    }
  }
}

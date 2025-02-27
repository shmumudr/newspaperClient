import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { TableData } from '../table-data';
import { NewspaperService } from '../newspaper.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

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
    // this.newspaperService.fetchData();
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
        console.error('Error fetching data:', error);
      }
    }
  }
}

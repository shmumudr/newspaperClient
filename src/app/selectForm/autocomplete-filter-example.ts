import { Component, OnInit } from '@angular/core';
import { NewspaperService } from '../newspaper.service';
import { SelectData, TableData } from '../table-data';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * @title Filter autocomplete
 */
@Component({
  selector: 'autocomplete-filter-example',
  templateUrl: 'autocomplete-filter-example.html',
  styleUrl: 'autocomplete-filter-example.css',
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class selectOption implements OnInit {
  dataSource: SelectData[] = [];
  selectedId: string = '';

  constructor(private service: NewspaperService) {}

  ngOnInit(): void {
    this.service.getNPnames().then((dataSource: SelectData[]) => {
      this.dataSource = dataSource;
    });
  }
  onSelectChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedId = target.value;
    console.log('Selected ID:', this.selectedId);
    this.service.setSelectedId(this.selectedId);
    this.service.fetchData(); 
  }
}

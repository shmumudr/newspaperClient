import { Component } from '@angular/core';
import { TableComponent } from '../table/table.component';
import { selectOption } from '../selectForm/autocomplete-filter-example';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, TableComponent, TableComponent, selectOption],
  template: `
    <section>
      <autocomplete-filter-example></autocomplete-filter-example>
      <section>
        <app-table></app-table>
      </section>
    </section>
  `,
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}

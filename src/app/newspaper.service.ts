import { Injectable } from '@angular/core';
import { SelectData, TableData } from './table-data';

@Injectable({
  providedIn: 'root',
})
export class NewspaperService {
  url = 'http://localhost:5094/';
  selectedId: string = '';
  isChange = false;

  constructor() {}

  setSelectedId(id: string) {
    this.selectedId = id;
  }
  getSelectedId() {
    return this.selectedId;
  }

  fetchData() {
    this.isChange = true;
    console.log("is change true");
  }
  async getData(id: string): Promise<TableData[]> {
    const response = await fetch(`${this.url}data/${id}`);

    if (!response.ok) {
      throw new Error(`error: ${response.status}`);
    }
    const data = await response.json();
    console.log(data, 'data');

    return data ?? [];
  }
  catch(error: any) {
    console.error('error in get data:', error);
    return [];
  }

  async getNPnames(): Promise<SelectData[]> {
    const response = await fetch(`${this.url}names`);
    const data = await response.json();
    console.log(data, 'data');
    return data ?? null;
  }
}

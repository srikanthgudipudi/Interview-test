import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { RegionService } from '../services/region.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements OnInit {
  value: any;
  Countries: any;
  dataSource: any
  dataToTable: any;
  filteredData: any;

  @Output() postCreated = new EventEmitter();

  constructor(private regionService: RegionService) { }

  ngOnInit(): void {
  }


  onRegionChange(value) {
    this.regionService.getDetails(value).subscribe(data => {
      this.Countries = data;
      this.dataSource = data;
    })

  }


  countrySelection(country) {
    this.filteredData = this._filter(country);
    this.sendData();
  }


  sendData() {
    this.dataToTable = this.filteredData;
  }

  private _filter(value: any) {
    const filterValue = value.toLowerCase();
    return this.dataSource.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

}

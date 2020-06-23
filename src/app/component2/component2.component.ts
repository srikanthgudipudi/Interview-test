import {
  Component, OnInit, ViewChild, Input,
  AfterContentChecked, AfterViewChecked, Output, EventEmitter, AfterViewInit
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component2Component implements OnInit {
  dataSource: any
  recordCount: any;
  displayedColumns: string[] = ['name', 'capital', 'population', 'currencies', 'flag'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @Input() receivedTableData: any;
  constructor() { }

  ngOnInit(): void {

  }

  sendToChild() {
    this.dataSource = this.receivedTableData
  }


}

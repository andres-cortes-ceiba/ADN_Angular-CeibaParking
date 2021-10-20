import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.sass']
})
export class GenericTableComponent implements OnInit {

  @Input() data: Observable<[]>;
  @Input() labels: string[];
  @Input() fields: string[];
  @Input() action: string;

  @Output() selectedItem = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitItemEvent(itemId) {
    this.selectedItem.emit(itemId);
  }

  trackByFn(_, item): number {
    return item.id;
  }

}

import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ButtonItem, ColumnItem} from "../../core/models/columnItem";

@Component({
  selector: 'app-list-simple',
  templateUrl: './list-simple.component.html',
  styleUrls: ['./list-simple.component.scss']
})
export class ListSimpleComponent {
  @Input() columns: ColumnItem[] = [];
  @Input() data?: any[] = [];
  @Input() buttons?: ButtonItem[]
  @Input() table?: string
  @Output() handelActionEmit = new EventEmitter<{item: number, action: any}>()

  handelAction(item: any, action: any) {
    this.handelActionEmit.emit({item: item,action: action})
  }
}

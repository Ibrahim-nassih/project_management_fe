import {Component, EventEmitter, Input, Output, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent{
  @Input() isDrawerOpen!: boolean
  @Input() width!: number
  @Output() closeEmit = new EventEmitter<any>()
  @Input() template!: TemplateRef<any>;
  @Input() title!: string
  constructor() {}
  ngOnInit(): void {
  }

  closeDrawer() {
    this.closeEmit.emit()
  }
}

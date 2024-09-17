import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  ChangeDetectorRef,
  ChangeDetectionStrategy
} from '@angular/core';
import { ButtonItem} from "../../core/models/columnItem";
import {DataTableService} from "../../core/services/dataTable.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {TranslateService} from "@ngx-translate/core";
import {ToastService} from "../../core/services/toastService";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit{
  search?: string = ''
  page: number = 1
  size: number = 10
  total!: number | null
  sort?: string = ''
  @Output() handelActionEmit = new EventEmitter<{item: number, action: any}>()
  dataTable?: any
  header?: any
  filters?: { value: any[] }
  listFilter: { key: string, value: string }[] = []
  @Input() table?: string
  @Input() columns?: any
  @Input() listFilters?: number[]
  @Input() filtersSearch?: any
  @Input() buttons?: ButtonItem[]
  @Input() buttonList?: boolean
  isLoad: boolean = false
  typeSort: string = 'ASC'
  searchMessage: string = ''

  constructor(
      private dataTableService: DataTableService,
      private cdr: ChangeDetectorRef,
      private modalService: NgbModal,
      private translate: TranslateService,
      private toastService: ToastService,
      ) {

  }
  ngOnInit() {
    this.handelData()
  }
  openModal(content: any) {
    this.modalService.open(content);
  }
  handelData() {
    this.isLoad = false
    const request = {
      table: this.table,
      column: this.columns,
      filters: this.listFilters,
      filtersColumn: this.filtersSearch,
      page: `${this.page - 1}`,
      size: `${this.size}`,
      search: this.search,
      dataFilter: JSON.stringify(this.listFilter),
      sort: this.sort
    }
    this.dataTableService.getData(request).subscribe(value => {
      this.translate.get('TITLESEARCH').subscribe(value1 => {
        this.searchMessage = value1
      })
      value.searchs.forEach((value: any) => {
        this.translate.get(this.table + '.' + value).subscribe(translatedValue => {
          this.searchMessage +=  translatedValue + ' , ';
        });
      });
      this.searchMessage = this.searchMessage.replace(/,\s*$/, "")
      this.total = value.total
      this.header = value.header
      this.dataTable = value.data
      this.filters = value.filters
      this.isLoad = true
      this.translate.get('OTHER.LOAD-DATA').forEach(value1 => {
        this.toastService.show(value1,
            { classname: 'bg-success text-white', delay: 1000 });
      })
      this.cdr.detectChanges();
    },error => {
      this.translate.get('OTHER.ERROR-LOAD-DATA').forEach(value1 => {
        this.toastService.show(
            value1,
            { classname: 'bg-danger text-white', delay: 1000 });
      })
    })
  }
  pageChange(page: any) {
    this.page = page
    this.handelData()
  }
  sizeChange($event: any) {
    this.size = $event.target.value
    this.handelData()
  }
  handelSearch() {
    this.handelData()
  }
  refreshData() {
    this.page = 1
    this.size = 10
    this.search = ''
    this.listFilter = []
    this.typeSort = 'ASC'
    this.sort = ''
    this.handelData()
  }
  handelFilter($event: any,type: string) {
    this.listFilter = this.listFilter.filter(pair => pair.key !== type)
    this.listFilter.push({ key: type, value: $event.target.value })
    this.handelData()
  }
  selectedFilter(key: any) {
    return this.listFilter.filter(pair => pair.key === key)[0]?.value
  }
  onSort($event: any) {
    this.typeSort = (this.typeSort === 'ASC') ? 'DESC' : 'ASC'
    this.sort = $event.column+','+this.typeSort
    this.handelData()
  }
  handelAction(item: any, action: any) {
    this.handelActionEmit.emit({item: item,action: action})
  }
 }

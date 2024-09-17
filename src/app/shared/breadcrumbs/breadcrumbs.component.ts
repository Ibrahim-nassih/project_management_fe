import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { JwtAuthService } from 'src/app/core/services/jwt-auth.service';
import { StorageService } from 'src/app/core/services/storageService';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})

/**
 * Bread Crumbs Component
 */
export class BreadcrumbsComponent implements OnInit {
  @Input() url: any;
  @Input() obj:any;
  @Input() title: string | undefined;
  @Input()
  breadcrumbItems!: Array<{
    active?: boolean;
    label?: string;
    route?: any,
  }>;

  Item!: Array<{
    label?: string;
  }>;

  constructor(private navigationServ:JwtAuthService) { }

  ngOnInit(): void {
  }
navigate(route:string){

this.navigationServ.navigateBack(route);
}
}

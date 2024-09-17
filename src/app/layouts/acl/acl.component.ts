import { Component, Input, OnInit } from '@angular/core'
import {JwtAuthService} from "../../core/services/jwt-auth.service";

@Component({
  selector: 'cui-acl',
  templateUrl: './acl.component.html',
})
export class ACLComponent implements OnInit {
  @Input() roles: any[] = [];
  authorized: boolean = false

  constructor(private jwtAuthService: JwtAuthService) {}

  ngOnInit(): void {
    this.authorized = this.jwtAuthService.isAuthorizedRoles([
      ...this.roles,
      'SUPER_ADMIN',
    ])
  }
}

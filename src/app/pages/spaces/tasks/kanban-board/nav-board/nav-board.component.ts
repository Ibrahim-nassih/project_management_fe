import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Lead } from 'src/app/core/models/spaces/lead';
import * as ticketActions from 'src/app/store/tickets/tickets.actions'
import { Store } from '@ngrx/store';
import { TeamMemberships, TeamUsers, currentSprint, steps, tickets, transactions } from 'src/app/store/reducers';
import { SpacesService } from 'src/app/core/services/spaces/spaces.service';
import { Transaction } from 'src/app/core/models/spaces/transaction';
import { Ticket } from 'src/app/core/models/spaces/ticket';
import { Step } from 'src/app/core/models/spaces/step';

@Component({
  selector: 'app-nav-board',
  templateUrl: './nav-board.component.html',
  styleUrls: ['./nav-board.component.scss']
})
export class NavBoardComponent implements OnInit {
  //variable 
  submSubTask: boolean = false;
  minDate!: Date;
  //lists
  transactions!: Transaction[];
  Tickets_sprint!: Ticket[];
  tickets!: Ticket[];
  steps!: Step[];
  steps$ = this.store.select(steps);
  transactions$ = this.store.select(transactions);
  parentTicket!:Ticket;
  @Input() lead!: Lead;
  constructor(  private store: Store
    , private spaceService: SpacesService) { }

  ngOnInit(): void {
    this.store.select(tickets).subscribe((data) => this.tickets = data);
    this.transactions$.subscribe((data) => this.transactions = data);
    this.steps$.subscribe((data) => this.steps = data);

  }
  openModal(content: any) {
    this.spaceService.openModal(content, 'md');
  }

  openModalSprint(content: any) {
    const currentDate = new Date();
    const tomorrow = new Date(currentDate);
    tomorrow.setDate(currentDate.getDate() + 1);
    this.minDate = tomorrow;
    this.Tickets_sprint = this.tickets.filter(ticket => ticket.ticket_type === 'Task' || ticket.ticket_type === 'Bug')
    this.spaceService.openModal(content, 'lg');
  }

}

import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// Drag and drop
import { DndDropEvent } from 'ngx-drag-drop';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { TicketsState, TicketsStateEnum } from 'src/app/store/tickets/tickets.reducers';
import { StepsState, StepsStateEnum } from 'src/app/store/steps/steps.reducers';
import { TeamMemberships, TeamUsers, steps, tickets, transactions } from 'src/app/store/reducers';
import { UpdateTicketStatusAction } from 'src/app/store/tickets/tickets.actions';
import { UpdateStepsOrderAction } from 'src/app/store/steps/steps.actions';
import { Ticket } from 'src/app/core/models/spaces/ticket';
import { Step } from 'src/app/core/models/spaces/step';
import { Transaction } from 'src/app/core/models/spaces/transaction';
@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss']

})
export class KANBANBOARDComponent implements OnInit {
  tickets: Ticket[] = [];
  epicTickets: Ticket[] = [];
  taskOrBugTickets: Ticket[] = [];
  subTaskTickets: Ticket[] = [];
  steps!: Step[];
  transactions!: Transaction[];
  lead: any;
  breadCrumbItems!: Array<{}>;
  users?: any;
  memberships?: any;
  taskStatusMap: { [status: string]: Ticket[] } = {};
  orderedSteps: { [order: number]: string } = {};
  dropedIndex!: number;
  draggedStep: any;
  moved: boolean = false;
  ticketsState$: Observable<TicketsState> | null = null;
  stepsState$: Observable<StepsState> | null = null;
  readonly TicketsStateEnum = TicketsStateEnum;
  readonly StepsStateEnum = StepsStateEnum;
  tickets$ = this.store.select(tickets);
  steps$ = this.store.select(steps);
  transactions$ = this.store.select(transactions);
  constructor(private route: ActivatedRoute, private store: Store<any>,
  ) {}

  ngOnInit(): void {
    this.transactions$.subscribe((data) => this.transactions = data);
    this.store.select(steps).subscribe(
      (data) => {
        this.steps = data;
        if (this.steps.length > 0) {
          this.steps?.forEach((step: any) => {
            this.taskStatusMap[step.name] = [];
            this.orderedSteps[step.order] = step.name;
          });
        }
        this.store.select(tickets).subscribe(
          (data) => {
            this.tickets = data;
            if (this.tickets.length > 0) {
              this.tickets?.forEach((ticket: any) => {
                const index = this.findStep(ticket.status)?.name;
                if (index && (ticket.ticket_type === 'Task' || ticket.ticket_type === 'Bug')) {
                  this.taskStatusMap[index].push(ticket);
                }
              });
              this.dividTickets(this.tickets);
            }
          }
        )
      }
    );

    //load users team
    this.store.select(TeamUsers).subscribe((data) => { this.users = data });
    this.store.select(TeamMemberships).subscribe((data) => { this.memberships = data });
    this.route.queryParams.subscribe(params => {
      if (params['lead']) {
        const spaceParam = decodeURIComponent(params['lead']);
        this.lead = JSON.parse(spaceParam);
        this.breadCrumbItems = [
          { label: 'Spaces',route:'spaces' },
          { label: 'leads',route:'/spaces/leads' },
          { label: this.lead.name, active: true }
        ];

      }

    });
  }
  // Function to divide tickets into lists
  dividTickets(tickets: Ticket[]) {
    this.epicTickets = tickets.filter(ticket => ticket.ticket_type === 'Epic');
    this.taskOrBugTickets = tickets.filter(ticket => ticket.ticket_type === 'Task' || ticket.ticket_type === 'Bug');
    this.subTaskTickets = tickets.filter(ticket => ticket.ticket_type === 'Sub-task');

    // Initialize the taskStatusMap
    this.steps.forEach((step: any) => {
      this.taskStatusMap[step.name] = this.taskOrBugTickets.filter((ticket: any) => ticket.status === step.id);
    });
  }
  //count tickets
  countTickets(status: string) {
    return this.taskStatusMap[status]?.length;
  }


  findStep(status: number): Step | undefined {
    return this.steps?.find((step: any) => step.id === status);
  }

  getConnectedStep(step: any): string[] {
    const workflowId = step.workflow;
    const stepId = step.id;
    const connectedStepNames: string[] = [];
    this.transactions?.forEach((transaction: any) => {
      if (transaction.workflow === workflowId && transaction.from_step === stepId) {
        const connectedStep = this.steps.find((s: any) => s.id === transaction.to_step);
        if (connectedStep) {
          connectedStepNames.push(connectedStep.name);
        }
      }
    });

    return connectedStepNames;
  }

  onDraggedList(item: any, list: any) {

  }
  reorderSteps(event: DndDropEvent, status: any, list: any) {
    if (status.value === event.data.value) {
      this.orderedSteps[event.data.key] = event.data.value;
    }
    else {
      if (list && event.dropEffect === 'move') {
        let index = event.index;
        if (typeof index === 'undefined') {
          index = list.length;
          list.splice(index, 0, event.data);
        }

        else {
          this.orderedSteps[status.key] = event.data.value;
          this.orderedSteps[event.data.key] = status.value;
          const data = {
            lead: this.lead.id,
            from_step: event.data.key,
            to_step: status.key
          }
          this.store.dispatch(new UpdateStepsOrderAction(data))
        }
      }

    }
  }

  /**
   * On task drop event
   */
  onDragged(item: any, list: any[]) {
    if (this.moved) {
      const index = list.indexOf(item);
      list.splice(index, 1);
      this.moved = false
    }
    else { }
  }
  onDrop(event: DndDropEvent, filteredList?: any[], targetStatus?: string) {
    if (filteredList && event.dropEffect === 'move' && targetStatus) {
      const step = this.steps.find((step: any) => step.id === event.data.status);
      // Check if the target status is in the connectedTo array of the dropped task
      const updStep = this.steps?.find((step: any) => step.name === targetStatus);
      if (this.getConnectedStep(step).includes(targetStatus)) {
        // Update the task's status and add it to the target status list  
        if (updStep) {
          event.data.status = updStep?.id;
          this.moved = true;
          let index = event.index;
          if (typeof index === 'undefined') {
            index = filteredList.length;
          }
          filteredList.splice(index, 0, event.data);
          //make update ticket in backend
          const updateData = {
            id: event.data.id,
            status: event.data.status,
          };
          this.store.dispatch(new UpdateTicketStatusAction(updateData));
        }
      }
      else if (updStep?.id === event.data.status) {// update index ticket in the list
        this.moved = true;
        let index = event.index;
        if (typeof index === 'undefined') {
          index = filteredList.length;
        }
        filteredList.splice(index, 0, event.data);
      }

    }
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Membership } from 'src/app/core/models/spaces/membership';
import { UserLeadOps } from 'src/app/core/models/spaces/user';
import { Observable, map } from 'rxjs';
import * as TicketsReducers from 'src/app/store/tickets/tickets.reducers'
import { Store } from '@ngrx/store';
import { TeamMemberships, TeamUsers, steps, tickets, transactions } from 'src/app/store/reducers';
import Swal from 'sweetalert2';
import * as ticketsActions from 'src/app/store/tickets/tickets.actions'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import * as ticketActions from 'src/app/store/tickets/tickets.actions'
import { SpacesService } from 'src/app/core/services/spaces/spaces.service';
import { Ticket } from 'src/app/core/models/spaces/ticket';
import { Step } from 'src/app/core/models/spaces/step';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  alltickets$: Observable<TicketsReducers.TicketsState> | null = null;
  @Input() task!: Ticket;
  @Input() taskOrBugTickets!: Ticket[];
  @Input() epicTickets!: Ticket[];
  @Input() lead: any;
  ticketsState$!: Observable<TicketsReducers.TicketsState>;
  tickets!: Ticket[]
  steps!: Step[];
  memberships!: Membership[];
  users!: UserLeadOps[];
  transactions: any
  //forms
  taskForm!: FormGroup;
  //variables
  isEditMode!: boolean;
  submSubTask: boolean=true;
  submitted: boolean = false;
  edTask!: Ticket;
  idtask!: number;
  tickets$=this.store.select(tickets);
 steps$=this.store.select(steps);
 transactions$=this.store.select(transactions);
  constructor(private store: Store, private modalService: NgbModal, private formBuilder: FormBuilder,
    private spaceService:SpacesService) {

  }
  ngOnInit(): void {
    //this.ticketsState$.subscribe((data)=>{console.log('data state',data.dataState) });
    this.transactions$.subscribe((data) => this.transactions = data);
    this.tickets$.subscribe((data) => {this.tickets = data;});
    this.steps$.subscribe((data) => { this.steps = data; })
    this.store.select(TeamUsers).subscribe((data) => { this.users = data });
    this.store.select(TeamMemberships).subscribe((data) => {
      this.memberships = data
    });
    this.taskForm = this.formBuilder.group({
      id: [],
      sprint: [],
      workflow: [''],
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      status: ['', [Validators.required]],
      priority: ['', [Validators.required]],
      assigned_to: ['', [Validators.required]],
      ticket_type: ['', [Validators.required]],
      parent_ticket: [],
      created_at: [],
      estimationDurationMinutes: this.formBuilder.group({
        estimation_duration_days: [, Validators.min(0)],
        estimation_duration_hours: [, Validators.min(0)],
        estimation_duration_minutes: [, Validators.min(0)],
      })
    })
  }
  getListSteps(task: any): Step[] {
    const connectedStepNames: Step[] = [];
    const transactionValid: any[] = [];
    //const Stepcourant = this.steps.find((s: any) => s.id === task.status);if (Stepcourant) {connectedStepNames.push(Stepcourant);}
    this.transactions?.forEach((transaction: any) => {
      if (transaction.workflow === task.workflow && transaction.from_step === task.status) {
        const connectedStep = this.steps.find((s: any) => s.id === transaction.to_step);
        if (connectedStep) {
          connectedStepNames.push(connectedStep);
        }
        transactionValid.push(transaction);
      }
    });

    return connectedStepNames;
  }
  ticketTypeIcons: any = {
    'Task': 'bx bx-task text-primary align-bottom',
    'Bug': 'bx bx-bug text-danger align-bottom',
  };
  get getIconClass(): string {
    return this.ticketTypeIcons[this.task.ticket_type] || '';
  }
  IconClass(ticketType: string): string {
    return this.ticketTypeIcons[ticketType] || '';
  }

  //delete ticket
  confirm(ev: any, task: any) {
    Swal.fire({
      title: 'Are you sure ?',
      text: 'Are you sure you want to remove this ticket ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#f46a6a',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Close'
    }).then(result => {
      if (result.value) {
        this.store.dispatch(new ticketsActions.DeleteTicketAction(task));
      }
    });
  }
  //progress ticket
  get totalProgress() {
    return this.progress + this.stepProgressDone;
  }
  //count progress in subtasks
  stepProgress: any;
  stepProgressDone: any;
  get progress(): number {
    this.parentTask = this.task;
    const totalSteps = Object.keys(this.steps).length - 1;
    const subtasks = this.getSubTask;
    this.stepProgress = 0;
    this.stepProgressDone = 0
    const step = this.findStep(this.task.status);
    if (step === this.steps[0]) {
      return 0;
    }
    if (subtasks.length === 0) {
      // No subtasks, calculate progress based on the task's step

      if (step)
        if (step !== this.steps[this.steps.length - 1]) {
          return Number(((step.order) * 100 / totalSteps).toFixed(2));
        }
        else {
          this.stepProgressDone = 100;
          return 0;
        }
    } else {

      // Calculate progress for each step based on subtasks
      subtasks.forEach((subtask: any) => {
        const subtaskStep = this.findStep(subtask.status);
        if (subtaskStep) {
          if (subtaskStep === this.steps[this.steps.length - 1]) {
            this.stepProgressDone += ((100 / totalSteps) / subtasks.length) * (subtaskStep.order);
          }
          else if (subtaskStep === this.steps[0]) {
            this.stepProgress += ((100 / totalSteps) / subtasks.length) * (subtaskStep.order);
          }
          else {
            this.stepProgress += ((100 / totalSteps) / subtasks.length) * (subtaskStep.order);
          }
          this.stepProgressDone = Number(this.stepProgressDone.toFixed(2))
        }
      });
      // Calculate overall progress by averaging step progress
      return Number(this.stepProgress.toFixed(2));
    }

    return 0;
  }
  // get subtasks
  get getSubTask() {
    return this.tickets.filter((ticket: any) => ticket.parent_ticket?.toString() === this.parentTask.id?.toString());
  }
  //find step by id
  findStep(status: number): Step | undefined {
    return this.steps?.find((step: any) => step.id === status);
  }
  //find user current task
  get findUser(): any {
    const member = this.memberships?.find((member: any) => member?.id === this.task.assigned_to);
    if (member) {
      const user = this.users?.find((user: any) => user.id === member.user);
      return user;
    }
  }
  // get profile firstname and lastname for user of current task
  get getProfile() {
    const member = this.memberships?.find((member: any) => member.id === this.task.assigned_to);
    const user = this.users?.find((user: any) => user?.id === member?.user);
    if (user) {
      const firstNameInitial = user.firstName ? user.firstName.charAt(0) : '';
      const lastNameInitial = user.lastName ? user.lastName.charAt(0) : '';
      return firstNameInitial + lastNameInitial;
    }
    return '';
  }
  //find parent tickets
  get findTicket(): any {
    return this.tickets?.find((ticket: any) => ticket.id === this.task.parent_ticket)
  }
  //open model subtasks
  parentTask: any;
  openModalSubtask(content: any) {
    // Pass data to the modal using the context property
    this.modalService.open(content, { size: 'lg', centered: true });
  }
  //count subtasks
  get countSubTasks() {
    return this.tickets?.filter((ticket: any) => ticket.parent_ticket?.toString() === this.task.id?.toString()).length;
  }
  // update ticket 
  modalRefUpdate: NgbModalRef | null = null;
  editModal(content: any, task: any) {
    this.submSubTask = false;
    this.isEditMode = false;
    if (task.ticket_type === 'Sub-task') {
      this.submSubTask = true;
    }
    if (task.ticket_type === 'Epic') {
      this.isEditMode = true;
    }
    this.idtask = task.id;
    const user = this.memberships?.find((member: any) => member?.id === task.assigned_to)
    this.submitted = false;
    this.spaceService.openModal(content,'md');
    this.taskForm.controls['title'].setValue(task.title);
    this.taskForm.controls['description'].setValue(task.description);
    this.taskForm.controls['status'].setValue(this.findStep(task.status)?.id);
    this.taskForm.controls['priority'].setValue(task.priority);
    this.taskForm.controls['ticket_type'].setValue(task.ticket_type);
    this.taskForm.controls['parent_ticket'].setValue(task.parent_ticket);
    this.taskForm.controls['created_at'].setValue(task.created_at);
    this.taskForm.controls['assigned_to'].setValue(this.findUser?.id.toString());
    this.taskForm.controls['workflow'].setValue(this.lead.id);
    this.taskForm.controls['id'].setValue(task.id);
    this.taskForm.controls['sprint'].setValue(task.sprint);
    //copier old data
    this.edTask = task;
  }
  get form() {
    return this.taskForm.controls;
  }
  updateTicket() {
    this.submitted = true;
    const user = this.memberships.find((member: any) => member.user.toString() === this.taskForm.value.assigned_to);
    this.taskForm.value.assigned_to = user?.id;
    this.taskForm.value.estimationDurationMinutes = this.edTask.estimationDurationMinutes
    if (this.taskForm.valid) {
      this.taskForm.value.status = parseInt(this.taskForm.value.status, 10)
      this.taskForm.value.parent_ticket = parseInt(this.taskForm.value.parent_ticket, 10);
      let formValue: Ticket = this.taskForm.value;
      this.store.dispatch(new ticketsActions.UpdateTicketAction(formValue));
    }

  }

  // define the first letters for some user
  getUserProfile(user: any) {
    if (user) {
      const firstNameInitial = user.firstName ? user.firstName.charAt(0) : '';
      const lastNameInitial = user.lastName ? user.lastName.charAt(0) : '';
      return firstNameInitial + lastNameInitial;
    }
    return '';
  }

  // the first letters for user assigned to ticket
  getSubTicketUser(ticket: any) {
    const member = this.memberships?.find((member: any) => member.id === ticket.assigned_to);
    const user = this.users?.find((user: any) => user?.id === member?.user);
    if (user) {
      const firstNameInitial = user.firstName ? user.firstName.charAt(0) : '';
      const lastNameInitial = user.lastName ? user.lastName.charAt(0) : '';
      return firstNameInitial + lastNameInitial;
    }
    return '';
  }
  // dfie user for subtask
  findSubTicketUser(id: number): any {
    const member = this.memberships?.find((member: any) => member?.id === id);
    if (member) {
      const user = this.users?.find((user: any) => user.id === member.user);
      return user;
    }
  }
  // on status ticket change
  onStatusChange(event: Event, subTask: any) {
    const selectedStatusId = (event.target as HTMLSelectElement).value;
    console.log('old status', subTask.status);
    // Check if the selected status is different from the current status
    if (selectedStatusId !== subTask.status) {
      const updateData = {
        id: subTask.id,
        status: parseInt(selectedStatusId,10),
      };
      this.store.dispatch(new ticketActions.UpdateTicketStatusAction(updateData));
    }
  }

  //open modal add ticket(subtask)
  addSubTask(content: any) {
    this.spaceService.openModal(content, 'md');
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Lead } from 'src/app/core/models/spaces/lead';
import { Step } from 'src/app/core/models/spaces/step';
import { Ticket } from 'src/app/core/models/spaces/ticket';
import { SpacesService } from 'src/app/core/services/spaces/spaces.service';
import { TeamMemberships, TeamUsers, steps } from 'src/app/store/reducers';
import * as ticketActions from 'src/app/store/tickets/tickets.actions';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.scss']
})
export class TicketFormComponent implements OnInit{
  @Input() lead!: Lead;
  @Input() submSubTask!:boolean;
  @Input() parentTicket!:Ticket;
  submitted:boolean=false;
  ticketForm!: FormGroup;
  memberships$ = this.store.select(TeamMemberships);
  users$ = this.store.select(TeamUsers);
  memberships: any;
  steps$ = this.store.select(steps);
  users: any;
  steps!: Step[];
  constructor(private spaceSer:SpacesService,private formBuilder:FormBuilder, private store:Store ){
    this.ticketForm = this.formBuilder.group({
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
    });
  }
ngOnInit(): void {
  this.users$.subscribe((data) => this.users = data);
  this.memberships$.subscribe((data) => this.memberships = data);
  this.steps$.subscribe((data) => this.steps = data);
      // ticket from
  if(this.submSubTask){
        console.log('subtask');
        this.ticketForm.controls['ticket_type'].setValue('Sub-task');
        this.ticketForm.controls['parent_ticket'].setValue(this.parentTicket.id);
        this.ticketForm.controls['assigned_to'].setValue(this.findSubTicketUser(this.parentTicket.assigned_to)?.id.toString());
        this.ticketForm.controls['status'].setValue(this.parentTicket.status);
    }

}

// get ticket from
get form() {
  return this.ticketForm.controls;
}
  // Separate functions for each duration field
  incrementDays() {
    const daysControl = this.ticketForm.get('estimationDurationMinutes.estimation_duration_days');
    if (daysControl) {
      daysControl.setValue(Math.min(30, daysControl.value + 1));
    }
  }

  decrementDays() {
    const daysControl = this.ticketForm.get('estimationDurationMinutes.estimation_duration_days');
    if (daysControl) {
      daysControl.setValue(Math.max(0, daysControl.value - 1));
    }
  }

  incrementHours() {
    const hoursControl = this.ticketForm.get('estimationDurationMinutes.estimation_duration_hours');
    if (hoursControl) {
      hoursControl.setValue(Math.min(24, hoursControl.value + 1));
    }
  }

  decrementHours() {
    const hoursControl = this.ticketForm.get('estimationDurationMinutes.estimation_duration_hours');
    if (hoursControl) {
      hoursControl.setValue(Math.max(0, hoursControl.value - 1));
    }
  }

  incrementMinutes() {
    const minutesControl = this.ticketForm.get('estimationDurationMinutes.estimation_duration_minutes');
    if (minutesControl) {
      minutesControl.setValue(Math.min(60, minutesControl.value + 1));
    }
  }

  decrementMinutes() {
    const minutesControl = this.ticketForm.get('estimationDurationMinutes.estimation_duration_minutes');
    if (minutesControl) {
      minutesControl.setValue(Math.max(0, minutesControl.value - 1));
    }
  }

  // get the fist letters from user name
getUserProfile(user: any) {
    if (user) {
      const firstNameInitial = user.firstName ? user.firstName.charAt(0) : '';
      const lastNameInitial = user.lastName ? user.lastName.charAt(0) : '';
      return firstNameInitial + lastNameInitial;
    }
    return '';
}
// close mdoal using service
closeModal(){
  this.spaceSer.closeModal();
}
// convert estimation duration on minutes
calculateDurationInMinutes(): number {
  const days = this.ticketForm.value.estimationDurationMinutes.estimation_duration_days || 0;
  const hours = this.ticketForm.value.estimationDurationMinutes.estimation_duration_hours || 0;
  const minutes = this.ticketForm.value.estimationDurationMinutes.estimation_duration_minutes || 0;

  return days * 24 * 60 + hours * 60 + minutes;
}
findSubTicketUser(id: number): any {
  const member = this.memberships?.find((member: any) => member?.id === id);
  if (member) {
    const user = this.users?.find((user: any) => user.id === member.user);
    return user;
  }
}
// send data
SubmitTicket() {

  this.ticketForm.controls['status'].setValue(this.steps[0].id);
  console.log('taskForm.value', this.ticketForm.value)
  const user = this.memberships.find((member: any) => member.user.toString() === this.ticketForm.value.assigned_to);
  this.ticketForm.value.assigned_to = user?.id;
  this.ticketForm.value.workflow = this.lead.id;
  if (this.ticketForm.valid) {
    this.ticketForm.value.estimationDurationMinutes = this.calculateDurationInMinutes();
    //form ticket
    const ticketData = this.ticketForm.value;
    console.log('ticketData',ticketData)
    this.store.dispatch(new ticketActions.CreateTicketAction({ data: ticketData, modal: null }));
  }
  this.submitted = true;
}
}

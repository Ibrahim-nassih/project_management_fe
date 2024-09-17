import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { DndDropEvent } from 'ngx-drag-drop';
import { Lead } from 'src/app/core/models/spaces/lead';
import { Step } from 'src/app/core/models/spaces/step';
import { Ticket } from 'src/app/core/models/spaces/ticket';
import { SpacesService } from 'src/app/core/services/spaces/spaces.service';
import { currentSprint } from 'src/app/store/reducers';
import * as sprintActions from 'src/app/store/sprints/sprints.actions';
import * as ticketsActions from 'src/app/store/tickets/tickets.actions'

@Component({
  selector: 'app-sprint-form',
  templateUrl: './sprint-form.component.html',
  styleUrls: ['./sprint-form.component.scss']
})
export class SprintFormComponent implements OnInit {
  @Input() lead!:Lead;
  @Input() steps!:Step[];
  sprintValid: boolean=false;
  submitted: boolean = false;
  sprint!: any;
  SprintForm!: FormGroup;
  TicketForm!: FormGroup;
  @Input() minDate!: Date;
  myDateValue: Date = new Date();
  ticket_ids!: number[];
  @Input() availableTickets!: Ticket[];
  selectedTickets: Ticket[]=[];
  constructor(private SpaceService:SpacesService ,private store:Store, private formBuilder:FormBuilder){}
ngOnInit(): void {
      this.store.select(currentSprint).subscribe((data) => {this.sprint = data;
        if(this.sprint){this.sprintValid = true;this.submitted = false;}
      });
      // sprint Form
      this.SprintForm = this.formBuilder.group({
        name: ['', Validators.required],
        description: ['', Validators.required],
        // Use the myDateValue as the initial value for start_date
        start_date: [{ value: this.myDateValue, disabled: true, }, Validators.required],
        end_date: [new Date(), Validators.required],
        workflow: []
      });
      //to fill out tickets of sprint
      this.TicketForm = this.formBuilder.group({
        Tickets: [, Validators.required],
      })
}
closeModale(){
  this.SpaceService.closeModal();
}

onDraggedSprint(item: any, list: any[]) {
  const index = list.indexOf(item);
  list.splice(index, 1);
}
onDropSprint(event: DndDropEvent, filteredList?: any[], targetStatus?: string) {
  if (filteredList && event.dropEffect === 'move') {
    let index = event.index;

    if (typeof index === 'undefined') {
      index = filteredList.length;
    }

    filteredList.splice(index, 0, event.data);
  }
}
// create sprint
AddSprint() {
  this.SprintForm.value.workflow = this.lead.id;
  if (this.SprintForm.valid) {

    const formValue = this.SprintForm.value;
    formValue['start_date'] = this.myDateValue;
    console.log('formValue', formValue);
    this.store.dispatch(new sprintActions.CreateSprintAction(formValue));

  }
  this.submitted = true;
}
// start sprint
StartSprint() {
  this.ticket_ids = this.selectedTickets.map(ticket => ticket.id);
  if (this.selectedTickets.length) {
    const paylod = {
      sprint: this.sprint.id,
      status: this.steps[1].id,
      tickets: this.ticket_ids,
    }
    console.log(paylod);
    this.store.dispatch(new ticketsActions.AddTicketsSprintAction(paylod));
  }
  this.submitted = true;
}
//count tickets no selected 
get countAvailableTickets() {
  return this.availableTickets?.length;
}
  //count tickets selected for sprint
  get countSelectedTickets() {
    return this.selectedTickets?.length;
  }

    //icons of tickets
    ticketTypeIcons: any = {
      'Task': 'bx bx-task text-primary align-bottom',
      'Bug': 'bx bx-bug text-danger align-bottom',
    };
    getIconClass(ticketType: string): string {
      return this.ticketTypeIcons[ticketType] || '';
    }
}

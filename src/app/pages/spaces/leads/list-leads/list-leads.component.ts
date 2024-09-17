import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UntypedFormBuilder, Validators, FormGroup, NgModel } from '@angular/forms';
import { SpacesService } from 'src/app/core/services/spaces/spaces.service';
import { StorageService } from 'src/app/core/services/storageService';
import { Store } from '@ngrx/store';
import { selectLeads, selectTeam} from 'src/app/store/reducers';
import { GetAllTicketsAction } from 'src/app/store/tickets/tickets.actions';
import { GetAllStepsAction } from 'src/app/store/steps/steps.actions';
import * as teamActions from 'src/app/store/team/team.actions';
import { GetAllTransactionsAction } from 'src/app/store/transactions/transactions.actions';
import { Team } from 'src/app/core/models/spaces/team';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as leadsActions from 'src/app/store/leads/lead.actions';

@Component({
  selector: 'app-list-leads',
  templateUrl: './list-leads.component.html',
  styleUrls: ['./list-leads.component.scss']
})
export class ListLeadsComponent implements OnInit {
  //variables
  leads: any;
  space: any;
  team!: Team|undefined;
  submitted = false;
  breadCrumbItems!: Array<{}>;
  //forms
  teamForm!: FormGroup;
  //lists
  leads$ = this.store.select(selectLeads); // Define leads$ to get spaces from the store
  team$ = this.store.select(selectTeam);

  constructor(private route: ActivatedRoute, private SpacesSer: SpacesService, private router: Router, private storage: StorageService,
     private formBuilder: UntypedFormBuilder,private modalService:NgbModal,
    private store: Store<any>,
    ) { 
      this.space=this.storage.retrieveValue('space');
    }
  ngOnInit(): void {
    //load leads
    this.leads$.subscribe((data)=>this.leads=data);
    this.team$.subscribe((team) => {this.team = team;});
    /*this.route.queryParams.subscribe(params => {
      if (params['space']) {
        const spaceParam = decodeURIComponent(params['space']);
        this.space = JSON.parse(spaceParam);

      }
    });*/
    this.breadCrumbItems = [
      { label: 'spaces' ,route:'spaces'},
      { label: this.space.name, active: true }
    ];
        //team form
  this.teamForm = this.formBuilder.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    space: [this.space.id, Validators.required],
  });
  }
  openModal(content: any) {
    this.submitted = false;
    this.SpacesSer.openModal(content,'md')
  }
  /**
  * Confirmation mail model
  */
  deleteLead: any;
  confirm(content: any, lead: any) {
    this.deleteLead = lead;
    this.modalService.open(content, { centered: true });
  }

  // Delete Data
  deleteData(lead: any) {
    this.store.dispatch(leadsActions.deleteLead({lead:lead}))
  }
  //get team form 
  get form() {
    return this.teamForm.controls;
  }
// create team
createTeam(){
  if(this.teamForm.valid){
    this.store.dispatch(teamActions.createTeam({team:this.teamForm.value}))
  }
  this.submitted=true;
}
addLead(){
  this.storage.saveValue('defaultUrl', '/#/spaces/addLead')
  this.router.navigate(['/spaces/addLead'], {
    queryParams: { space: encodeURIComponent(JSON.stringify(this.space)) },
  })
}
loadtasks(lead: any) {
  const payload={id:lead.id};
  this.store.dispatch(new GetAllTicketsAction(payload));
  this.store.dispatch(new GetAllStepsAction(payload));
  this.store.dispatch(new GetAllTransactionsAction({id:lead.id}));
  this.store.dispatch(teamActions.loadTeamUsers({id:lead.space}));
  this.store.dispatch(teamActions.loadTeamMemberships({id:lead.space}));
  this.storage.saveValue('defaultUrl', '/#/spaces/tasks')
  this.router.navigate(['/spaces/tasks'], {
    queryParams: { lead: encodeURIComponent(JSON.stringify(lead)) },
  })
}

}

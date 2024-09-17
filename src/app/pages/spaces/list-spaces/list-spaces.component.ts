import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SpacesService } from 'src/app/core/services/spaces/spaces.service';
import { StorageService } from 'src/app/core/services/storageService';
import { Store } from '@ngrx/store';
import * as SpacesActions from 'src/app/store/spaces/spaces.actions';
import * as SpacesReducers from 'src/app/store/spaces/spaces.reducer';
import { selectSpaces } from 'src/app/store/reducers';
import { createdSpace } from 'src/app/store/reducers';
import { Observable, map } from 'rxjs';
import * as leadsActions from 'src/app/store/leads/lead.actions';
import * as teamActions from 'src/app/store/team/team.actions';
import * as usersLeadctions from 'src/app/store/usersLeadOps/users.action';

@Component({
  selector: 'app-list-spaces',
  templateUrl: './list-spaces.component.html',
  styleUrls: ['./list-spaces.component.scss']
})
export class ListSpacesComponent implements OnInit {
    breadCrumbItems!: Array<{}>;
    submitted = false;
    spaceForm!: UntypedFormGroup;
    selectValue = ['Private', 'Public'];
    //spaces$ = this.store.select(selectSpaces); // Define spaces$ to get spaces from the store
    spaces$:Observable<SpacesReducers.SpacesState>|null=null;
    spaceCreatedSuccess$ = this.store.select(createdSpace);


    constructor(
      private router: Router,
      private storage: StorageService,
      private formBuilder: UntypedFormBuilder,
      private store: Store<SpacesReducers.SpacesState>,
      private spaceService:SpacesService,
    ) {}

    ngOnInit(): void {
      this.store.dispatch(SpacesActions.loadSpaces());
      /**
       * BreadCrumb
       */
      this.breadCrumbItems = [
        { label: 'Spaces',route:'spaces', active: true }
      ];
      this.spaces$=this.store.pipe(
        map((state:any)=>state.spaces)
      )

      /**
       * Form Validation
       */
      this.spaceForm = this.formBuilder.group({
        name: ['', [Validators.required]],
        description: ['', [Validators.required]],
        privacy: ['', [Validators.required]],
      });
    }

    loadLeads(space: any) {
      this.storage.saveValue('space',space);
      this.store.dispatch(teamActions.loadTeam({id:space.id}));
      this.store.dispatch(usersLeadctions.loadUsersNotInTeam({id:space.id}));
      this.store.dispatch(leadsActions.loadLeads({id:space.id}));
      this.storage.saveValue('defaultUrl', '/#/spaces/leads');
      this.router.navigate(['/spaces/leads']);
    }

    openModal(content: any) {
      this.spaceForm.reset();
      this.submitted = false;
      this.spaceService.openModal(content,'md')
      //this.modalService.open(content, { size: 'md', centered: true });
    }

    get form() {
      return this.spaceForm.controls;
    }

    saveSpace() {
      if(this.spaceForm.valid){
      this.store.dispatch(SpacesActions.createSpace({ space: this.spaceForm.value }));
    
      // Subscribe to the createSpaceSuccess action
        //if ( this.spaceCreatedSuccess$ ) {this.modalService.dismissAll();}
        }
        this.submitted = true;
    }
    
}

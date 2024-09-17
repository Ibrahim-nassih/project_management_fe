import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Team } from 'src/app/core/models/spaces/team';
import { SpacesService } from 'src/app/core/services/spaces/spaces.service';
import { selectTeam, selectUsers } from 'src/app/store/reducers';
import * as teamActions from 'src/app/store/team/team.actions'

@Component({
  selector: 'app-add-members',
  templateUrl: './add-members.component.html',
  styleUrls: ['./add-members.component.scss']
})
export class AddMembersComponent implements OnInit{
  memberForm!:FormGroup;
  team!:any;
  submitted:boolean=false;
  usersSelected$ = this.store.select(selectUsers);
  usersExluded!: any[];
  transformedUsers: { label: string, value: any }[] = [];
  team$ = this.store.select(selectTeam);
  constructor(private formBuilder:FormBuilder, private store:Store, private SpaceServ:SpacesService){}
ngOnInit(): void {
  this.team$.subscribe((team) => {this.team = team;});
      //member form
      this.memberForm = this.formBuilder.group({
        users: ['', [Validators.required]],
      });
      this.usersSelected$.subscribe((usersSelected) => {
        this.usersExluded = usersSelected;
        this.transformedUsers = this.usersExluded?.map(user => {
          return {
            value: user,          // Keep the original User object as the value
            label: user.username  // Display username as the label
          };
        });
      });
}
closeModale(){
  this.SpaceServ.closeModal();
}
get form() {
  return this.memberForm.controls;
}
Addusers() {
  const memberDataList = [];
  // Loop through the user IDs in the form value
  console.log('team',this.team)
  if(this.team){
  for (const user of this.memberForm.value.users) {
    // Create a JSON object with team and user information
    const memberData = {
      team: this.team.id,
      user: user.id
    };
    // Push the JSON object to the array
    memberDataList.push(memberData);
  }
  this.store.dispatch(teamActions.addMembersAction({members:memberDataList}))
  // Now you have a list of JSON objects containing team and user information
  console.log(memberDataList);}
  this.submitted = true

}
}

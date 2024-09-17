import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { TokenStorageService } from '../token-storage.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Space } from '../../models/spaces/space';
import { Lead } from '../../models/spaces/lead';
import { Step } from '../../models/spaces/step';
import { Transaction } from '../../models/spaces/transaction';
import { Ticket } from '../../models/spaces/ticket';
import { UserLeadOps } from '../../models/spaces/user';
import { Membership } from '../../models/spaces/membership';
import { Team } from '../../models/spaces/team';
import { Sprint } from '../../models/spaces/sprint';

@Injectable({
  providedIn: 'root'
})
export class SpacesService {

  constructor( private http: HttpClient,private authSer:TokenStorageService,private modalService: NgbModal) {}
  
  
  getSpaces(): Observable<Space[]> {
    console.log(this.authSer.getToken());
    return this.http.get<Space[]>('api/space')
  }
  getLeads(space:number): Observable<Lead[]> {
    return this.http.get<Lead[]>('api/workflow', {headers:new HttpHeaders({id: space.toString(),})});
  }
  getSteps(workflowIds:number): Observable<Step[]>{
     return this.http.get<Step[]>(`api/step?workflowIds=${workflowIds}`,);
  }
  getTransactions(workflowIds:number): Observable<Transaction[]>{
    return this.http.get<Transaction[]>(`api/transaction?workflowIds=${workflowIds}`,)
  } 
  getTickets(workflowIds:number): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`api/ticket?workflowIds=${workflowIds}`, )
  }
  getTasks(workflowIds:number):Observable<any[]>{
    return this.http.get<any>(`api/tasks?workflowIds=${workflowIds}`,)
  }
  getUsersNotInTeam(space:number): Observable<UserLeadOps[]> {
    return this.http.get<UserLeadOps[]>(`api/register?space=${space}`,);
  }
  getTeamUsers(space:number): Observable<UserLeadOps[]> {
    return this.http.get<UserLeadOps[]>(`api/users?space=${space}`,)
  }
  getMembershipTeam(space:number): Observable<Membership[]> {
    return this.http.get<Membership[]>('api/member',{headers:new HttpHeaders({id:space.toString()})})
  }
  getTeam(space:number) : Observable<Team>{
    return this.http.get<Team>(`api/team?space=${space}`,)
  }
  updateTicket(ticket: any): Observable<Ticket> {
    return this.http.patch<Ticket>(`api/ticket`, ticket,)}

  postspace(formData:any): Observable<Space>{
    return this.http.post<Space>('/api/space', formData,)
  }

  postLead(leadData:any): Observable<Lead>{
    return this.http.post<Lead>('/api/workflow', leadData)
  }
  postSteps(steps:any): Observable<Step[]>{
   return this.http.post<Step[]>('api/step', steps ,)
  }
  postTransactions(transactions:any): Observable<Transaction[]>{
      return this.http.post<Transaction[]>('api/transaction', transactions ,)
  }
 
  addmembers(data:any): Observable<Membership>{
    return this.http.post<Membership>('api/member', data,)
  }
  updateOrderSteps(data:any): Observable<Step[]>{
    return this.http.put<Step[]>('api/step', data, )
  }
  
  postTicket(formData:any): Observable<Ticket>{
    return this.http.post<Ticket>('/api/ticket', formData, )
  }
  deleteTicket(data:any){
    console.log('data',data)
    return this.http.delete(`api/ticket?id=${data.id}`, )}
 
  putTicket(data:any, id:number): Observable<Ticket>{
    return this.http.put<Ticket>(`api/ticket?id=${id}`,data, )
  }
  postSprint(data:any): Observable<Sprint>{
    return this.http.post<Sprint>('api/sprint',data,)
  }
  putTicketSprint(data:any): Observable<Ticket[]>{
    return this.http.put<Ticket[]>(`api/sprint/tickets`,data,)
  }

  postTeam(team:any): Observable<Team>{
     return this.http.post<Team>('api/team', team,)
  }

  deleteLead(data:any){
    console.log('data',data)
    return this.http.delete(`api/workflow?id=${data.id}`,)
  }
modalRef: NgbModalRef | null = null;
openModal(content: any,contentSize:string) {
  this.modalRef = this.modalService.open(content, { size: contentSize, centered: true });
}
closeModal(){
  this.modalRef?.close();
}
private successCreated = new BehaviorSubject< boolean>(false);
success$ = this.successCreated.asObservable();
createdStepsSuccess() {
  this.successCreated.next(true);
}
loadingCreateSteps(){
  this.successCreated.next(false);
}
}

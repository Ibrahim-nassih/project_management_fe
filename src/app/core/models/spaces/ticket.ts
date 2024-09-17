export interface Ticket{
    id:number;
    title:string;
    description:string;
    priority:string;
    ticket_type:string;
    created_at:Date;
    status:number;
    assigned_to:number;
    workflow:number;
    parent_ticket:number;
    sprint:number;
    estimationDurationMinutes:number;
  } 
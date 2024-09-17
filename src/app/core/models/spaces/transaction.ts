export interface Transaction{
    id:number;
    name:string;
    description:string;
    workflow:number;
    from_step:number;
    to_step:number;
    created_at:Date;
  }
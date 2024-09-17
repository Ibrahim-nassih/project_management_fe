export interface UserLeadOps{
    id:number;
    username:string;
    email:any; 
    password:any;
    firstName:string;
    lastName:string;
    is_active:boolean;
    keycloak_user_id:string;
    group_name:string;
}
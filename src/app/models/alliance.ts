export class Alliance {
    user_id:number
    patient_id:number
    role:number
    email:string

    constructor(user_id,role,email){
        this.user_id = user_id
        this.role = role
        this.email = email

    }
}
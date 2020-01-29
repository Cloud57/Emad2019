import { Reports } from './reports'

export class Task {
    id:number
    name:String
    description:String
    duration:number
    autonomy:number
    icon:string
    patient_id:number
    reports: any[]
    is_task_active:boolean
}
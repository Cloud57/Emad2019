import { Reports } from './reports'

export class Task {
    name:String
    description:String
    duration:number
    autonomy:number
    icon:String
    patient_id:number
    reports: any[]
}
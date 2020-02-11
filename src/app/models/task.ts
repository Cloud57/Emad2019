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
    last_exec_time:number
    media_files: any[]
}
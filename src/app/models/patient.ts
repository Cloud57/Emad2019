import { User } from './user';
import { Task } from './task';
import { Alliance } from './alliance';

export class Patient {
    id: number;
    name: string;
    surname: string;
    address: string;
    birth_date: string;
    height: string;
    weight: string;
    diagnosis: string;
    user_id: number;
    created_at: string;
    updated_at: string;
    profile_pic: string;
    users_in_alliance: User[]
    alliance: Alliance;
    tasks: Task[]
}
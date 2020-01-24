import { User } from './user';

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
    user_in_alliance: User[]
}
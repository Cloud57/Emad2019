export class Problem_behaviour {
    id: number;
    name: string;
    description: string;
    frequency: number;
    intensity: number;
    duration: number;
    antecedent: string;
    behavior: string;
    consequence: string;
    date: string;
    patient_id: number;
    created_at: string;
    updated_at: string;
    public static get TYPE_BEHAVIOR():string[] { return ["Aggressività","Autolesionismo","Dondolarsi","Ignorare richieste",
    "Rifiutare richieste", "Sfarfallamento alle mani", "Togliersi i vestiti in pubblico", "Altro"] }   
    public static get INTENSITY_BEHAVIOR():string[] { return ["bassa","media","alta"] }   
}
import { Idepartment } from "./idepartment";

export interface Istudent {
    id: number;
    name: string;
    department_id: number;
    age: number;
    department: Idepartment
}

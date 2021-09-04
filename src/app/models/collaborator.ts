import { Role } from "./role";
import { SolidarityHistory } from "./solidarity-history";
import { User } from "./user";


export class Collaborator extends User {

    constructor(
        public id: number,
        public username: string,
        public password: string,
        public phone: string,
        public email: string,
        public name: string,
        public surname: string,
        public solidarityHistory: SolidarityHistory | null,
        public age: number,
        public role: string,
        public type: string
    ){
        super(username,password,role,type);
    }
    


}

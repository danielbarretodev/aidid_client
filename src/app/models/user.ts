import { Role } from "./role";
import { UserType } from "./user-type";

export class User {
    constructor(
        public username: string,
        public password: string,
        public role: string,
        public dtype: string
    ){}
    


}
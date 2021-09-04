export class NewUser {
    constructor(
        public nombre: string,
        public nombreUsuario: string,
        public email: string,
        public password: string,
        public roles: string[] 
    ){}
}
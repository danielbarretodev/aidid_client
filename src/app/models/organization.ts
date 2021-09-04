import { Membership } from "./membership";
import { Project } from "./project";
import { Role } from "./role";
import { User } from "./user";

export class Organization extends User {

    constructor(
        public id: number,
        public username: string,
        public password: string,
        public name: string,
        public country: string,
        public role: string,
        public dtype: string,
        public projects: Project[],
        public activityType: string,
        public memberships: Membership[],

    ){
        super(username,password,role,dtype);
    }

    set(organization: Organization)
    {
        this.id=organization.id;
        this.username=organization.username;
        this.password=organization.password;
        this.name=organization.name;
        this.country=organization.country;
        this.memberships=organization.memberships;
        this.role=organization.role;
        this.projects=organization.projects;
    }
}

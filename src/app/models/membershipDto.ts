import { Membership } from "./membership";

export class MembershipDto {

    constructor(
        public membership: Membership | null,
        public idSolidarityHistory: number,
        public idOrganization: number
    ){}

    
}
import { Donation } from "./donation";

export class DonationDto {

    constructor(
        public donation: Donation | null,
        public idSolidarityHistory: number,
        public idOrganization: number
    ){}

    
}
import { Organization } from "./organization";
import { SolidarityHistory } from "./solidarity-history";

export class Membership {


    constructor(
        public id: number,
        public amount: number,
        public periodicity: number,
        public description: string,
        public startDate: Date | null,
        public endingDate: Date | null,
        public solidarityHistoryId: number,
        public organizationId: number,
        public organizationUserName: string
    ){}

    
}

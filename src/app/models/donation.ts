export class Donation {
    constructor(
        public id: number,
        public amount: number,
        public periodicity: number,
        public description: string,
        public created: Date | null,
        public organizationUserName: string,
        public solidarityHistoryId: number
    ){}
}
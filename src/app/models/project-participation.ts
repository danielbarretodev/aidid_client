import { Project } from "./project";
import { SolidarityHistory } from "./solidarity-history";

export class ProjectParticipation {

    constructor(
        public id: number,
        public descripcion: string,
        public startDate: Date,
        public endingDate: Date,
        public solidarityHistoryId: number,
        public projectId: number,
        public contactPhone: number,
        public contactEmail: string
    ){}
}

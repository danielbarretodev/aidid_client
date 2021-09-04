import { Collaborator } from "./collaborator";
import { Donation } from "./donation";
import { Membership } from "./membership";
import { ProjectParticipation } from "./project-participation";

export class SolidarityHistory {

    constructor(
        public id: number,
        public memberships: Membership[] | null,
        public donations: Donation[] | null,
        public projectParticipations: ProjectParticipation[] | null,
        public collaboratorId: number,
        public collaboratorUserName: string
    ){}
}

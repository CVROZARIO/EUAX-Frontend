import { Project } from './project'

export class ProjectStatus {
    project!: Project;
    activityCount!: number;
    percentFinished!: number;
    delayed!: boolean;
}
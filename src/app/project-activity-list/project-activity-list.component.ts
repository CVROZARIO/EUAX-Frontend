import { Component, OnInit } from '@angular/core';
import { ChallengeService } from '../challenge.service';
import { ProjectActivity } from '../project_activity';

import CommonsJs from '../../assets/js/commonsjs'

@Component({
  selector: 'app-project-activity-list',
  templateUrl: './project-activity-list.component.html',
  styleUrls: ['./project-activity-list.component.css']
})
export class ProjectActivityListComponent implements OnInit {

  projectActivities?: ProjectActivity[];
  commonsJs = new CommonsJs();

  constructor(private challengeService: ChallengeService) { }

  ngOnInit(): void {
    this.getProjectActivityList();
  }

  private getProjectActivityList(){
    this.challengeService.getProjectActivityList().subscribe(data => {
      this.projectActivities = data.reverse()
    });
  }

  deleteProjectActivity(objId : any): void {
    this.challengeService.deleteProjectActivity(Number(objId)).subscribe(
      data => this.commonsJs.CallSimpleModelAlertSuccess("Atividade removida com sucesso."),
      error => this.commonsJs.ParseSimpleError(error)
    );
  }

}

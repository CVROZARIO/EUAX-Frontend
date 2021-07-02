import { Component, OnInit } from '@angular/core';
import { ChallengeService } from '../challenge.service';
import { ProjectStatus } from '../project_status'
import { Project } from '../project'

import CommonsJs from '../../assets/js/commonsjs'

@Component({
  selector: 'app-project-status-list',
  templateUrl: './project-status-list.component.html',
  styleUrls: ['./project-status-list.component.css']
})
export class ProjectStatusListComponent implements OnInit {

  projectStatuses?: ProjectStatus[];
  commonsJs = new CommonsJs();

  constructor(private challengeService: ChallengeService) { }

  ngOnInit(): void {
    this.geProjectStatusList();
  }

  private geProjectStatusList(){
    this.challengeService.geProjectStatusList().subscribe(data => {
      this.projectStatuses = data.reverse()
    });
  }


}

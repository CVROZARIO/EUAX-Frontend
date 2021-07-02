import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from './project'
import { ProjectActivity } from './project_activity'
import { ProjectStatus } from './project_status';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  private webApiBaseUrl = "http://localhost:8080";
  private webApiUriProjCreate = "/project/create";
  private webApiUriProjDelete = "/project/delete";
  private webApiUriProjStatus = "/project/status";
  private webApiUriProjList = "/project/list";
  private webApiUriProjActCreate = "/project/activity/create";
  private webApiUriProjActDelete = "/project/activity/delete";
  private webApiUriProjActList = "/project/activity/list";

  constructor(private HttpClient: HttpClient) { }

  public createProject(project: Project): Observable<Project>{
    return this.HttpClient.post<Project>(`${this.webApiBaseUrl+this.webApiUriProjCreate}`, project);
  }

  public deleteProject(id: number){
    return this.HttpClient.post(`${this.webApiBaseUrl+this.webApiUriProjDelete}`, id);
  }

  public getProjectList(): Observable<Project[]>{
    return this.HttpClient.get<Project[]>(`${this.webApiBaseUrl+this.webApiUriProjList}`);
  }

  public createProjectActivity(projectActivity: ProjectActivity): Observable<ProjectActivity>{
    return this.HttpClient.post<ProjectActivity>(`${this.webApiBaseUrl+this.webApiUriProjActCreate}`, projectActivity);
  }

  public deleteProjectActivity(id: number){
    return this.HttpClient.post(`${this.webApiBaseUrl+this.webApiUriProjActDelete}`, id);
  }

  public getProjectActivityList(): Observable<ProjectActivity[]>{
    return this.HttpClient.get<ProjectActivity[]>(`${this.webApiBaseUrl+this.webApiUriProjActList}`);
  }

  public geProjectStatusList(): Observable<ProjectStatus[]>{
    return this.HttpClient.get<ProjectStatus[]>(`${this.webApiBaseUrl+this.webApiUriProjStatus}`);
  }
  
}

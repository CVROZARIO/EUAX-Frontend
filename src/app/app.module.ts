import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { FormsModule } from '@angular/forms';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { ProjectActivityListComponent } from './project-activity-list/project-activity-list.component';
import { ProjectActivityCreateComponent } from './project-activity-create/project-activity-create.component';
import { ProjectStatusListComponent } from './project-status-list/project-status-list.component';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ProjectCreateComponent,
    ProjectActivityListComponent,
    ProjectActivityCreateComponent,
    ProjectStatusListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    },
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

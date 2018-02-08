import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { ServicesComponent } from './components/services/services.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { BannerComponent } from './components/banner/banner.component';
import { NotFoundComponent } from "./components/not-found/not-found.component";

const routes: Routes = [
  { path: '', component: BannerComponent },
  { path: 'project-detail/:id', component: ProjectDetailComponent },
  { path: 'Projects', component: ProjectsListComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Services', component: ServicesComponent },
  { path: 'Skills', component: SkillsComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Home', component: BannerComponent },
  { path: '404', component: NotFoundComponent },
  { path: '*', redirectTo: 'BannerComponent' }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

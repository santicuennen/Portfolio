import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { HttpClientModule } from '@angular/common/http';
import { EducationComponent } from './components/education/education.component';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ApLogoComponent } from './components/nav/ap-logo/ap-logo.component';
import { MediaLinksComponent } from './components/nav/media-links/media-links.component';
import { NewSkillFormComponent } from './components/new-item-components/new-skill-form/new-skill-form.component';
import { NewProyectFormComponent } from './components/new-item-components/new-proyect-form/new-proyect-form.component';
import { NewEducationFormComponent } from './components/new-item-components/new-education-form/new-education-form.component';
import { AboutmeEditComponent } from './components/new-item-components/aboutme-edit/aboutme-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProfileComponent,
    AboutMeComponent,
    SkillsComponent,
    ProyectsComponent,
    EducationComponent,
    routingComponent,
    PortfolioComponent,
    ApLogoComponent,
    MediaLinksComponent,
    NewSkillFormComponent,
    NewProyectFormComponent,
    NewEducationFormComponent,
    AboutmeEditComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

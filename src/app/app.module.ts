import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { AboutComponent } from './components/about/about.component';
import { FormationComponent } from './components/formation/formation.component';
import { FooterComponent } from './components/footer/footer.component';
import { SkillcardComponent } from './components/skillcard/skillcard.component';
import { CardformationComponent } from './components/cardformation/cardformation.component';
import { CardcourseComponent } from './components/cardcourse/cardcourse.component';
import { ModalComponent } from './components/modal/modal.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { ThanksComponent } from './components/thanks/thanks.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    IntroductionComponent,
    AboutComponent,
    FormationComponent,
    FooterComponent,
    SkillcardComponent,
    CardformationComponent,
    CardcourseComponent,
    ModalComponent,
    EmitterComponent,
    ThanksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

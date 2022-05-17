import { Routes } from '@angular/router';
import { MyWorkComponent } from '../pages/my-work/my-work.component';
import { WebSkillComponent } from '../pages/web-skill/web-skill.component';

export const NAV_ROUTES : Routes = [
  
    { path: 'portfolio', component: MyWorkComponent },
    { path: 'web-skill', component: WebSkillComponent },
    { path: '' , pathMatch: 'full', redirectTo: 'portfolio' }

]
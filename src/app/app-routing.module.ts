import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { WhiteBoxComponent } from './white-box/white-box.component';
import { AgileBestPracticesIndexComponent } from './agile-best-practices-index/agile-best-practices-index.component';
import { DataDrivenScrumComponent } from './data-driven-scrum/data-driven-scrum.component';
import { DataScienceResearchDevComponent } from './data-science-research-dev/data-science-research-dev.component';
import { WhyAgileComponent } from './why-agile/why-agile.component';
import { MicrosoftTdspComponent } from './microsoft-tdsp/microsoft-tdsp.component';
import { CrispDmComponent } from './crisp-dm/crisp-dm.component';
import { CpmaiComponent } from './cpmai/cpmai.component';
import { ComparisonTableComponent } from './comparison-table/comparison-table.component';

const routes: Routes = [
  { path: 'dashboard', component: AppComponent },
  {
    path: 'white-box',
    component: WhiteBoxComponent,
  },
  {
    path: '',
    component: AgileBestPracticesIndexComponent,
  },
  {
    path: 'agile-best-practices/data-driven-scrum',
    component: DataDrivenScrumComponent,
  },
  {
    path: 'agile-best-practices/data-science-research-dev',
    component: DataScienceResearchDevComponent,
  },
  {
    path: 'agile-best-practices/why-agile',
    component: WhyAgileComponent,
  },
  {
    path: 'agile-best-practices/microsoft-tdsp',
    component: MicrosoftTdspComponent,
  },
  {
    path: 'agile-best-practices/crisp-dm',
    component: CrispDmComponent,
  },
  {
    path: 'agile-best-practices/cpmai',
    component: CpmaiComponent,
  },
  {
    path: 'agile-best-practices/comparison-table',
    component: ComparisonTableComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

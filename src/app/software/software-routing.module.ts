import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { SoftwareComponent } from './software.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FishermenComponent } from './fishermen/fishermen.component';

const routes: Routes = [
  {
    path: '', component: SoftwareComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'fishermen', component: FishermenComponent },
    ]
  }
];

// const routes: Routes = [
//   {
//     path: '', canActivate: [SoftwareRoutingActivate], component: SoftwareComponent,
//     children: [
//       { path: '', canActivate: [SoftwareRoutingActivate], component: DashboardComponent },
//       { path: 'dashboard', canActivate: [SoftwareRoutingActivate], component: DashboardComponent },
//     ]
//   }
// ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoftwareRoutingModule { }

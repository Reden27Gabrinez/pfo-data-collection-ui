import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material
import { MaterialModule } from './software-material';

// Flex Layout
import { FlexLayoutModule } from '@angular/flex-layout';

// Wijmo Flex Grid
// import * as wjGrid from '@grapecity/wijmo.angular2.grid';
// import { WjGridModule } from '@grapecity/wijmo.angular2.grid';
// import { WjGridFilterModule } from '@grapecity/wijmo.angular2.grid.filter';

import { DatePipe } from '@angular/common';

// import { NgxDocViewerModule } from 'ngx-doc-viewer';
// import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

import { SoftwareRoutingModule } from './software-routing.module';
import { SoftwareComponent } from './software.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FishermenComponent } from './fishermen/fishermen.component';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    SoftwareComponent,
    DashboardComponent,
    FishermenComponent,
    UsersComponent,
  ],
  imports: [
    CommonModule,
    SoftwareRoutingModule,
    MaterialModule
  ],
  providers: [
    // SoftwareRoutingActivate,
    // UserRegistrationDialogComponent,
    // ComfirmMassageDialogComponent,
    // EmployeeListPickDialogComponent,
    // SnackBarTemplate,
    // DecimalPipe,
    DatePipe,
    // { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    // { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ]
})
export class SoftwareModule { }

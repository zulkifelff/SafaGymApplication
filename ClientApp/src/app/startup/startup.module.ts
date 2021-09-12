import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StartupRoutingModule} from './startup-routing.module';
import {IndexComponent} from './index/index.component';
import {MenuComponent} from './menu/menu.component';
import {AttendanceComponent} from './attendance/attendance.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import { MembersComponent } from './members/members.component';
import { RolesComponent } from './roles/roles.component';
import { PackageComponent } from './package/package.component';
import { ReportsComponent } from './reports/reports.component';
import { HomeComponent } from './home/home.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {PaginationModule} from "ngx-bootstrap/pagination";

@NgModule({
  declarations: [IndexComponent, MenuComponent, AttendanceComponent, MembersComponent, RolesComponent, PackageComponent, ReportsComponent, HomeComponent],
    imports: [
        CommonModule,
        StartupRoutingModule,
        MatInputModule, MatNativeDateModule,
        MatSidenavModule, FormsModule, ReactiveFormsModule, SharedModule, MatFormFieldModule, MatDatepickerModule, PaginationModule
    ],
  exports: [IndexComponent, MenuComponent, AttendanceComponent, MembersComponent, RolesComponent, PackageComponent, ReportsComponent, HomeComponent]
})
export class StartupModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartupRoutingModule } from './startup-routing.module';
import { IndexComponent } from './index/index.component';
import { MenuComponent } from './menu/menu.component';
import { AttendanceComponent } from './attendance/attendance.component';


@NgModule({
  declarations: [IndexComponent, MenuComponent, AttendanceComponent],
  imports: [
    CommonModule,
    StartupRoutingModule
  ],
  exports: [IndexComponent, MenuComponent, AttendanceComponent]
})
export class StartupModule { }

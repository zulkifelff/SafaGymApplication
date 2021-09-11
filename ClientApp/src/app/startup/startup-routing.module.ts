import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IndexComponent} from "./index/index.component";
import {AttendanceComponent} from "./attendance/attendance.component";


const routes: Routes = [{
  path: '', component: IndexComponent, children: [
    {path: 'attendance', component: AttendanceComponent}]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StartupRoutingModule {
}

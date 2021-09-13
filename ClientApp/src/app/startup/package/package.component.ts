import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.scss']
})
export class PackageComponent implements OnInit {
  passingHeading: string="Packages";

  constructor() { }

  ngOnInit(): void {
  }

}

import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

const SMALL_WIDTH_BREAKPOINT = 720;
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  showFiller = true;

  public isScreenSmall!: boolean;
  sidenav: any;
mode: any;
toggleSidenav: any;



  constructor(
    private breakpointObserver: BreakpointObserver,

    private router: Router) { }

  //@ViewChild(MatSidenav) sidenav: MatSidenav;

  // toggleTheme() {
  //   this.isDarkTheme = !this.isDarkTheme;
  // }

  // toggleDir() {
  //   this.dir = this.dir == 'ltr' ? 'rtl' : 'ltr';
  // }

  ngOnInit(): void {
    this.breakpointObserver
      .observe([`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`])
      .subscribe((state: BreakpointState) => {
        this.isScreenSmall = state.matches;
      });



    this.router.events.subscribe(() => {
      if (this.isScreenSmall) {
        this.sidenav.close();
      }
    });
  }

}

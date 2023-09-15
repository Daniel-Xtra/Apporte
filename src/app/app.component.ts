import { Component, HostListener } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  mobHeight: any;
  mobWidth: any;
  @HostListener('window:scroll', ['$event']) onScrollEvent($event: any) {
    // console.log(window.pageYOffset);
    if (window.pageYOffset >= 300) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  }
  constructor() {
    // this.mobHeight = window.screen.height + 'px';
    // this.mobWidth = window.screen.width + 'px';
    // console.log(this.mobHeight);
    // console.log(this.mobWidth);
  }
  scrollToTop(): void {
    window.scroll(0, 0);
  }
}

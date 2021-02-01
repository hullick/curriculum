import { Component, HostListener } from '@angular/core';
import { WindowScrollType } from './enums/window-scroll-type.enum';
import { WindowScrollService } from './services/window-scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'curriculum';

  constructor(private windowScrollService: WindowScrollService) { }

  @HostListener('window:scroll', ['$event'])
  onScrollEvent($event: any) {
    // console.log($event);
    // console.log("scrolling");

    let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    let max = document.documentElement.scrollHeight;

    // console.log(pos, max);

    // pos/max will give you the distance between scroll bottom and and bottom of screen in percentage.
    if (pos === max) {
      //Remove stick header
      this.windowScrollService.scrollDetectedTo(WindowScrollType.TOP);
    } else {
      this.windowScrollService.scrollDetectedTo(WindowScrollType.BODY);
      this.windowScrollService.scrollDetectedTo(WindowScrollType.BOTTOM);
    }
  }
}

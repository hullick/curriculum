import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { WindowScrollType } from 'src/app/enums/window-scroll-type.enum';
import { WindowScrollService } from 'src/app/services/window-scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('stickyHeader', [
      state('sticky', style({
        opacity: 1,
        backgroundColor: 'white',
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem'
      })),
      state('initial', style({
        opacity: 1,
        backgroundColor: 'unset',
        paddingTop: '1rem',
        paddingBottom: '1rem'
      })),
      transition('sticky => initial', [
        animate('0.5s')
      ]),
      transition('initial => sticky', [
        animate('1s')
      ]),
    ]),
  ]
})
export class HeaderComponent implements OnInit {
  public stickyHeader: boolean = false;

  constructor(private windowScrollService: WindowScrollService) { }

  ngOnInit(): void {
    this.windowScrollService.windowScrollEmitter.subscribe(
      (windowScrollType: WindowScrollType) => {
        if (windowScrollType === WindowScrollType.TOP) {
          this.stickyHeader = false;
        } else {
          this.stickyHeader = true;
        }
      }
    );
  }
}

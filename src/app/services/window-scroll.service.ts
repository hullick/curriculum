import { Injectable } from '@angular/core';
import { EventEmitter } from "@angular/core";
import { WindowScrollType } from '../enums/window-scroll-type.enum'

@Injectable({
  providedIn: 'root'
})
export class WindowScrollService {
  public windowScrollEmitter: EventEmitter<WindowScrollType>;

  constructor() {
    this.windowScrollEmitter = new EventEmitter();
  }

  scrollDetectedTo(windowScrollType: WindowScrollType) {
    this.windowScrollEmitter.emit(windowScrollType);
  }
}

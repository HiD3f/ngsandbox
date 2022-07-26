import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class ModalDisplayService {

  private readonly isModalDisplayed = new BehaviorSubject<boolean>(false);

  constructor() {}

  // eslint-disable-next-line @typescript-eslint/member-ordering
  isModalDisplayed$ = this.isModalDisplayed.asObservable();

  changeModalDisplay(display: boolean): void {
    this.isModalDisplayed.next(display);
  }
}

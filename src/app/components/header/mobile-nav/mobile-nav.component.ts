import { Component, Input, OnInit } from '@angular/core';
import {
 trigger, state, style, animate, transition, query, group
} from '@angular/animations';
import { ModalDisplayService } from 'src/app/services/modal-display.service';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss'],
  animations: [
    trigger('fade', [
      transition(':enter',[
        style({ opacity: 0 })
      ]),
      transition(':leave',[
         style({ opacity: 1 })
      ])
    ])
  ]
})
export class MobileNavComponent implements OnInit {

  modalPanelCollapsed: boolean = false;

  constructor( private readonly modalDisplayService: ModalDisplayService ) { }

  ngOnInit(): void {
    this.modalDisplayService.isModalDisplayed$.subscribe(
      d => (this.modalPanelCollapsed = !d)
    );
  }

  toggleModalPanelCollapsed(): void {
    this.modalDisplayService.changeModalDisplay(this.modalPanelCollapsed);
  }

  @Input() menuItems: any;

}

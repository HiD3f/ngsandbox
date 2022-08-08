import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

export interface DropDownItem {
  label: string;
  value: string | number
}

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss'],
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('250ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('100ms', style({ opacity: 0 }))
      ])
    ]),
  ]

})
export class DropDownComponent implements OnInit {
  @Input()
  placeholder: string = 'Veuillez selectionner un item';
  @Input() Items!: DropDownItem[];
  @Input() SelectedItem!: DropDownItem;
  @Output() OnChange: EventEmitter<DropDownItem> = new EventEmitter<DropDownItem>();
  Show: boolean = false;
  constructor() { }
  ngOnInit(): void {
  }
  toggle() {
    this.Show = !this.Show;
  }
  select(item: DropDownItem) {
    this.SelectedItem = item;
    this.OnChange.emit(this.SelectedItem);
    this.toggle();
  }

}

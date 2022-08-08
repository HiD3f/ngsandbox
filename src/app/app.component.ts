import {Component} from '@angular/core';
import {DropDownItem} from "./components/drop-down/drop-down.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngsandbox';
  items: DropDownItem[] = [
    {
      label: 'Orange',
      value: 1
    },
    {
      label: 'Fraise',
      value: 2
    },
    {
      label: 'Cerise',
      value: 3
    }
  ]
  selectedItem: DropDownItem | undefined;

  selectItem($event: DropDownItem) {
    this.selectedItem = $event;
  }
}

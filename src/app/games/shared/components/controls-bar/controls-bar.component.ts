import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ControlList} from '../../interface';

@Component({
  selector: 'app-controls-bar',
  templateUrl: './controls-bar.component.html',
  styleUrls: ['./controls-bar.component.scss']
})
export class ControlsBarComponent implements OnInit {
  @Output() quntityOnPage: EventEmitter<any> = new EventEmitter<any>();

  private controlList: ControlList[] = [
    {
      text: 'Set:',
      perPage: 4,
      active: false,
    },
    {
      text: 'Set:',
      perPage: 12,
      active: true,
    },
    {
      text: 'Set:',
      perPage: 24,
      active: false,
    },
    {
      text: 'Set:',
      perPage: 48,
      active: false,
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  get controls(): ControlList[] {
    return this.controlList;
  }

  setActiveClass(item: ControlList): void {
    this.controlList.map(list => {
      if (item.perPage === list.perPage) {
        list.active = true;
        return list;
      }
      list.active = false;
      return list;
    });
  }

  chooseQuantity(item): void {
    this.setActiveClass(item);
    this.quntityOnPage.emit(item.perPage);
  }
}

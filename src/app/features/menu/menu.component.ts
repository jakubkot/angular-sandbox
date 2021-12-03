import { Component, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public items!: MegaMenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'formularze', icon: 'pi pi-fw pi-video',
      },
    ]
  }
}

import { Subscription } from 'rxjs'
import { CoreService } from './../../../services/core.service'
import { Component, ElementRef, OnInit, computed, viewChildren } from "@angular/core"
import { List } from 'src/app/models/list.interface'

@Component({
  selector: 'app-base-list',
  templateUrl: './base-list.component.html'
})
export class BaseListComponent {
  public title = this.listService.select('title')


  constructor(public listService: CoreService<List>) {

  }



}

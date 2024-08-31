import { Component } from '@angular/core';
import { CoreService } from './services/core.service'
import { List } from './models/list.interface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {


  constructor(public listService: CoreService<List>) {

  }

  ngOnInit() {
  }

  public setTitle(a_value: string) {
    this.listService.set('title', a_value)
  }
}

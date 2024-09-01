import { Component } from '@angular/core';
import { StateService } from './services/state.service'
import { List } from './models/list.interface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {


  constructor(public stateService: StateService<List>) {

  }

  ngOnInit() {
  }

  public setTitle(a_value: string) {
    this.stateService.set('title', a_value)
  }
}

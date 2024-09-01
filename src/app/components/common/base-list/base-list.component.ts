import { ChangeDetectorRef, OnInit, Signal, signal } from '@angular/core'
import { StateService } from '../../../services/state.service'
import { List } from 'src/app/models/list.interface'
import { HttpService } from 'src/app/services/http.service'
import { ChangeDetectionStrategy, Component, computed, effect } from '@angular/core'
import { Observable } from 'rxjs'
import { toSignal } from '@angular/core/rxjs-interop'

@Component({
  selector: 'app-base-list',
  templateUrl: './base-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseListComponent implements OnInit {
  public title: Signal<string>
  public data!: any[]
  public metas!: any[]
  public beanId!: string

  constructor(public stateService: StateService<List>, public httpService: HttpService<any>, private cdr: ChangeDetectorRef) {
    this.title = this.stateService.select('title')
    effect(() => {
      if (this.title()) {
        this.httpService.api.path = '/' + this.title()
        this.httpService.getList({ skip: 0, limit: 10, page_nb: 1, filters: [] }).subscribe(result => {
          this.data = result.data
          this.metas = result.metas
          this.beanId = result.metas[0].name
          this.cdr.markForCheck()
        })
      }
    })


  }

  ngOnInit(): void {
    this.stateService.set('title', 'booking')
  }


}

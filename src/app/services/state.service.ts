import { Injectable, Signal, computed, signal } from "@angular/core"
import { BehaviorSubject } from "rxjs"

@Injectable({ providedIn: 'root'})
export class StateService<T> {
  /**
   * global state
   */
  readonly state = signal({} as T)

  /**
   * Returns a reactive value for a property on the state.
   * @param key string
   */
  public select<K extends keyof T>(key: K): Signal<T[K]> {
    return computed(() => this.state()[key])
  }

  /**
   * Set a new value in the state
   * @param key
   * @param value
   */
  public set<K extends keyof T>(key: string, value: T[K]): void {
    this.state.update(curr => ({...curr, [key]: value}))
  }

  /**
   * Update the state with partial state (mulitple props)
   * @param partialState
   */
  public setState(partialState: Partial<T>): void {
    this.state.update(curr => ({...curr, ...partialState}))
  }

  /**
   * Reset the state
   * @param newState
   */
  public setNewState(newState: T): void {
    this.state.set(newState)
  }

}

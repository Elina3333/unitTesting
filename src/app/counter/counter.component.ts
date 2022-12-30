import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {ActivatedRouteSnapshot} from "@angular/router";

@Component({
  selector: 'app-counter',
  template: `Counter: {{counter}}`
})

export class CounterComponent {
  counter: number = 0;

  @Output() counterEmitter = new EventEmitter<number>();

  increment() {
    this.counter++;
    this.counterEmitter.emit(this.counter);
  }

  decrement() {
    this.counter--;
  }
}

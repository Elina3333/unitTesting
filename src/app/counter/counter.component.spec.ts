import {CounterComponent} from "./counter.component";
import {compute} from "../playground/compute";

describe('CounterComponent', () => {
  let counterComponent:CounterComponent;

  beforeEach( () => {
    counterComponent = new CounterComponent();
  })

  it('should increment counter by 1', function () {
    counterComponent.increment();
    expect(counterComponent.counter).toBe(1);
  });

  it('should decrement counter by 1', function () {
    counterComponent.decrement();
    expect(counterComponent.counter).toBe(-1);
  });

  it('should increment value by event emitter', function () {
    let result : number = 0;
    counterComponent.counterEmitter.subscribe(v => result = v);
    counterComponent.increment();
    expect(result).toBe(1);
  });
})

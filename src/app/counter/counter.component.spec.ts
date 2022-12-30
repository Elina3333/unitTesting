import {CounterComponent} from "./counter.component";
import {compute} from "../playground/compute";
import {FormBuilder} from "@angular/forms";

describe('CounterComponent', () => {
  let counterComponent:CounterComponent;

  beforeEach( () => {
    counterComponent = new CounterComponent(new FormBuilder());
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

  it('should create form with 2 controls', function () {
    expect(counterComponent.form.contains('login')).toBeTruthy();
    expect(counterComponent.form.contains('email')).toBeTruthy();
  });

  it('should mark login as valid if empty value', function () {
    const control = counterComponent.form.get('login');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  });
})

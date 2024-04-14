import { Component, effect, input, output  } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  template: `
    <h1 class="child-headline">Child</h1>
    <h2 class="child-input">Input-Signal from parent component : {{ signalFromParent() }} </h2>
    <label for="input">Signal to parent</label>
    <input type="number" name="input"  (change)="sendMessageToParent($event)">

  `,
  styles: `h1.child-headline {
    text-align : center;}
    
    label {
      padding-inline : 20px; font-weight : bold;
    }
    `
})
export class ChildComponent {

  signalFromParent = input.required<number>();

  messageEvent = output<number>();
  // outputSignalFromChild = output<Event>();

  sendMessageToParent(event: Event) {

    let value = (event.target as HTMLInputElement).value
    let valueToParent = +value

    this.messageEvent.emit(valueToParent)
  }
  

  constructor() {
  
  }

}

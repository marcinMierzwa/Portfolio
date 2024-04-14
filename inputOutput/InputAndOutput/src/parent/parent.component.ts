import { Component, Signal, computed, effect, signal } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  template: `
    
      <div class="parent">
        <h1 class="parent-headline">Parent</h1>

        <h2 class="parent-output"

        >Output-Signal from child component : {{ OutputFromChild() }}
        </h2>

        <label for="input1">Signal to child template 1 </label>
        <input type="number" name="input1"
        (input)="getInputValueTemplate1($event)">
        <label for="input2">Signal to child template 2</label>
        <input type="number" name="input2"
        (input)="getInputValueTemplate2($event)">

        
        <div class="child-container">

        <app-child [signalFromParent]="signalComputedToChild()"
        (messageEvent)="reciveMessage($event)"
        />

        </div>
      </div>
    
  `,
  styles: ` 
  div.parent { 
    width : 80vw; height : 80vh; background-color : lightgray; margin: 4rem auto; padding : 2rem; } h1.parent-headline{padding: 3rem; text-align : center;} 

  h2.parent-output {
    padding : 2rem; } 

  div.child-container { 
    border: 1px solid black; padding: 2rem; width : 80%; height : 30%; margin: 2rem auto; background-color : lightyellow;}
    
    label {
      padding-inline : 2rem; font-weight : bold;
    }

    `
})
export class ParentComponent {

  signalComputedToChild: Signal<number> = computed(() => this.signalFromParentTemplateOne() + this.signalFromParentTemplateTwo());
  signalFromParentTemplateOne = signal<number>(0);
  signalFromParentTemplateTwo = signal<number>(0);

  OutputFromChild = signal<number>(0);


getInputValueTemplate1(event: Event) {
    let inputValue = Number((event.target as HTMLInputElement).value);
    this.signalFromParentTemplateOne.update(() => inputValue);
  }

  getInputValueTemplate2(event: Event) {
    let inputValue = Number((event.target as HTMLInputElement).value);
    this.signalFromParentTemplateTwo.update(() => inputValue);
  }

  reciveMessage(message: number) {
    this.OutputFromChild.update( ()=>  message)
    
  }


}

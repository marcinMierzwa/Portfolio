import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

 isVisible = signal<boolean>(false);
 

sendSignal() {
  
}

foo() {
  console.log("foo");
  
}



  

 
//  get getIsVisible() {
//   return this.isVisible;
//  } 



}
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {





// changeValue(par:number){

//   console.log(par);
  

// // return par * 2


 
// }


// sendSignal(par:number) {

//   setInterval( ()=> {this.changeValue(par) }, 2000);

// }
// isNumber = signal<number>(2);
isNumber = 2;

sendSignal() {

 setInterval(()=> this.getIsVisible, 2000)
}

getIsVisible(num:number) {
  
   this.isNumber = this.isNumber + num
  // console.log(this.isNumber);
  return this.isNumber;
}






}
import { Injectable, signal } from '@angular/core';
import { interval, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  isFormSubmitedService = signal<boolean>(true);

  changeIsSubmitedStatus() {
    interval(3000)
      .pipe(take(1))
      .subscribe((value) => {
        if (value === 0) {
          this.isFormSubmitedService.update((val: boolean) => (val = false));
        }
      });
  }
}

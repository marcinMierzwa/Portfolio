import { CommonModule, NgClass } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { ToasterComponent } from '../toaster/toaster.component';
import { ContactService } from '../../Services/contact.service';

@Component({
  selector: 'app-form',
  standalone: true,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  imports: [ReactiveFormsModule, NgClass, ToasterComponent],
})

export class FormComponent {

  private formBuilder = inject(FormBuilder);
  private contactService = inject(ContactService);

  isFormSubmitted = false;
  isFormSubmittedError = false;
  isToasterVisible = signal<boolean>(false);

  form: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(100)]],
    toName: 'Admin',
    email: [
      '',
      [Validators.required, Validators.email, Validators.maxLength(100)],
    ],
    message: ['', [Validators.required, Validators.maxLength(300)]],
  });

  async sendToDataBase() {
    emailjs.init('8mMToC4EjJyTILm_5');

    let response = await emailjs
      .send('service_c8vhaum', 'template_cmmndys', {
        from_name: this.form.value.name,
        to_name: this.form.value.toName,
        from_email: this.form.value.email,
        message: this.form.value.message,
      })
      .then(
        () => {
          this.isFormSubmitted = true;
        },
        (error) => {
          this.isFormSubmittedError = true;
        }
      )
      .then(
        () => {
      // this.isToasterVisible = this.contactService.getIsVisible;
      // this.contactService.sendSignal();
      console.log(this.contactService.foo());
      
      
        })
    this.form.reset();
  }

  // onClick() {
  //   this.contactService.updateIsVisibleValue();
  //   this.isToasterVisible = this.contactService.getIsVisible;
  // }
}

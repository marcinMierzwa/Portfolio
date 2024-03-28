import { CommonModule, NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule ,NgClass],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  private formBuilder = inject(FormBuilder);

  form: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(100)]],
    toName: 'Admin',
    email: ['', [Validators.required, Validators.email, Validators.maxLength(100)]],
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
      .then(() => {
        alert('message has been sent succesfully!');
      },
      (error) => {
        alert("Sorry :( but message cannot be sent, please try again later");
      });

      console.log(this.form.get('name'));
      
    // this.form.reset();
  }
}

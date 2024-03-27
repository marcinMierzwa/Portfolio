import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  private formBuilder = inject(FormBuilder);

  form: FormGroup = this.formBuilder.group({
    name: '',
    toName: 'Admin',
    email: '',
    message: '',
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
        console.log('FAILED...', (error as EmailJSResponseStatus).text);
      });
      

    this.form.reset();
  }
}

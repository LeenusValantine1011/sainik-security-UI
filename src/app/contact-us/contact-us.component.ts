import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from 'src/environment';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
})
export class ContactUsComponent {
  isLoading = false;
  successMessage = '';
  errorMessage = '';

  constructor() {
    // Option A: initialize once (optional)
    // emailjs.init(environment.EMAILJS_PUBLIC_KEY);
  }

  sendEmail(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    this.isLoading = true;
    this.successMessage = '';
    this.errorMessage = '';

    emailjs.sendForm(
      environment.EMAILJS_SERVICE_ID,
      environment.EMAILJS_TEMPLATE_ID,
      form,
      environment.EMAILJS_PUBLIC_KEY // you can alternatively call emailjs.init(...) once
    ).then((response) => {
      this.isLoading = false;
      this.successMessage = 'Message sent successfully — I will get back to you soon.';
      form.reset();
      console.log('EmailJS success', response);
    }, (err) => {
      this.isLoading = false;
      this.errorMessage = 'Failed to send message. Please try again later.';
      console.error('EmailJS error', err);
    });
  }
}

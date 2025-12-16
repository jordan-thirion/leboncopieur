import { Component } from '@angular/core';
import { AppModule } from '../app.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  imports: [AppModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class ContactComponent {
contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      object: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const templateParams = {
        from_name: this.contactForm.value.name,
        reply_to: this.contactForm.value.email,
        message: this.contactForm.value.message
      };

      emailjs.send(
        'service_8mh0275',
        'template_qkjupum',
        templateParams,
        'vjYkuXp2M4_xGjndG'
      ).then(() => {
        alert('Message envoyé avec succès !');
        this.contactForm.reset();
      }).catch((error) => {
        console.error('Erreur EmailJS:', error);
        alert("Échec de l'envoi du message.");
      });
    } else {
      alert('Veuillez remplir correctement le formulaire avant de soumettre.');
    }
  }
}

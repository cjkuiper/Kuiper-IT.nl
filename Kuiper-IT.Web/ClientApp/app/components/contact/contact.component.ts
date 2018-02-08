import { Component, OnInit } from '@angular/core';
import { ContactService } from '../shared/services/contact-service.service' 
import { ContactRequest } from '../shared/classes/contact-request';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactRequest = new ContactRequest();

  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.contactService.sendContactRequest(this.contactRequest).then();
  }

  get diagnostic() { return JSON.stringify(this.contactRequest); }
}

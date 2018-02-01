import { Component, OnInit } from '@angular/core';
import { ContactService } from '../shared/services/contact-service.service' 
import { ContactRequest } from '../shared/classes/contact-request';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }

  sendContactRequest() {
    this.contactService.sendContactRequest(new ContactRequest ()).then();
  }
}

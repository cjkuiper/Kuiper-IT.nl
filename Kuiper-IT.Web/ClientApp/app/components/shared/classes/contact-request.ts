export class ContactRequest {
  public Email: string;
  public PhoneNumber: string;
  public Name: string;
  public Subject: string;
  public Message: string;

  constructor();
  constructor(email: string, phoneNumber: string, name: string, subject: string, message: string); 
  constructor(email?: string, phoneNumber?: string, name?: string, subject?: string, message?: string) {
    this.Email = email;
    this.PhoneNumber = phoneNumber;
    this.Name = name;
    this.Subject = subject;
    this.Message = message;
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VerifyService {

  constructor() { }

validatePhone(contact) {
    const patt = /^[\+]?[(]?[0-9]{3}[)]?[\s\.]?[0-9]{3}[\s\.]?[0-9]{4,6}$/; // Regex for testing telephone number patterns
    return patt.test(String(contact));    // valid patterns +XX XXXX XXXX, +XX-XXXX-XXXX
}

validateEmail(email) {
  const patt = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // Regex for testing email addresses
  return patt.test(String(email).toLowerCase());
}
}

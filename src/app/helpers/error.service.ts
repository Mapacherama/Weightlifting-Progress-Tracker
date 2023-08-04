import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  public errorHandler(response: any): any {
    if (response.data?.errors) {
      const message = response.data.errors[0].message.replaceAll("'", '"');
      return message.includes('[') ? JSON.parse(message) : [message];
    }
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DependServiceService {

  constructor() { }

  message="depend service theke channel service e gese";
  go(){
    return this.message;
  }
  
}

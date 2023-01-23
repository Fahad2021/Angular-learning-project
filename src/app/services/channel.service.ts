import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  constructor() { }

  display(){
    return ("Hello service");
  }

  fahad(){
    return("abc abd");
  }
}

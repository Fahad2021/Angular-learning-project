import { Injectable } from '@angular/core';
import { DependServiceService } from './depend-service.service';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  constructor(private dService:DependServiceService) {
    console.log(dService.go());
    
   }

  display(){
    return ("Hello service");
  }

  fahad(){
    return("abc abd");
  }

  getValue(V:string){
     console.log(V);
     
  }
}

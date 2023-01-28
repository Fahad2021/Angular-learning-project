import { Component, OnInit } from '@angular/core';
import { ChannelService } from '../services/channel.service';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  items:any=[
    'name',"fame","wealth"
  ];

  title="Hello bd";
  constructor(private chServices:ChannelService){}

  ngOnInit():void{
    this.f();
  }

  f(){
    // console.log(this.title);
    return this.title;
    
  }
  sum(){
    return 40+50;
  }
  message(){
    return this.chServices.display();
  }
  ui(){
    return this.chServices.fahad();
  }
  dis="likha service a pathabo";
  show(){
    this.chServices.getValue(this.dis);
  }

}

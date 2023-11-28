import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-sidbar',
  templateUrl:'./sidbar.component.html',
  styleUrls: ['./sidbar.component.css']
})
export class SidbarComponent    {
name="aya";
username="enter your user name";
password="enter your password";
numbervar=5;
red=false;
green=true;
titelstyle=({
text:"primary",
width:"150px",
background:"orange",
})


changecolor(){
this.red=!this.red;
this.green=!this.green;

}
callphone(event:any){

console.log(event);
}






}

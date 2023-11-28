import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parant',
  templateUrl: './parant.component.html',
  styleUrls: ['./parant.component.css']
})
export class ParantComponent {
@ViewChild("para") paraEl!:ElementRef;
stylepara(){
console.log(this.paraEl.nativeElement)


}

}

import { Component, OnInit } from '@angular/core';
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'animals',
  templateUrl: './animals.component.html'
})
export class AnimalsComponent implements OnInit{
  title = 'Animals';

  ngOnInit(){
    $('#botonjq').click(function () {
        $('#textojq').slideToggle();
    });
    $('#caja').dotdotdot()
  }
  textoRitchEditor(event){
    console.log(event);
  }
}

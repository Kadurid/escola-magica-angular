import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'btn-voltar',
  templateUrl: './btn-voltar.component.html'
})
export class BtnVoltarComponent implements OnInit {

  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  voltar(){
    this.location.back();
  }

}

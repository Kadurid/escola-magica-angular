import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'form-debug',
  templateUrl: './form-debug.component.html'
})
export class FormDebugComponent implements OnInit {

  @Input() form: any;

  constructor() { }

  ngOnInit(): void {
  }

}

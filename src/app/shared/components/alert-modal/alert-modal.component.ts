import { BsModalRef } from 'ngx-bootstrap/modal';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'alert-modal',
  templateUrl: './alert-modal.component.html'
})
export class AlertModalComponent implements OnInit {

  @Input() type='success';
  @Input() message?:string;

  constructor(
    public bsModalRef : BsModalRef
  ) { }

  ngOnInit(): void {
  }

}

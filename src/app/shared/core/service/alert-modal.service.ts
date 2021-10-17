import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from '../../components/alert-modal/alert-modal.component';

export enum AlertTypes {
  DANGER = 'danger',
  SUCCESS = 'success',
  WARNING = 'warning'
}

@Injectable({ providedIn: 'root' })
export class AlertModalService {

  bsModalRef?: BsModalRef;

  constructor(
    private modalService : BsModalService
  ) {}

  private showAlert(type: string,message: string){
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = type;
    this.bsModalRef.content.message = message;
  }

  showAlertDanger(message: string){
    this.showAlert(AlertTypes.DANGER, message);
  }

  showAlertWarning(message: string){
    this.showAlert(AlertTypes.WARNING, message);
  }

  showAlertSuccess(message: string){
    this.showAlert(AlertTypes.SUCCESS, message);
  }
}

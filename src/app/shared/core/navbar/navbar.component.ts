import { faHatWizard } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  hatIcon = faHatWizard;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { faFacebookF, faGithub, faGoogle, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faHatWizard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'page-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
  facebookIcon = faFacebookF;
  twitterIcon = faTwitter;
  googleIcon = faGoogle;
  instagramIcon = faInstagram;
  linkedinIcon = faLinkedin;
  githubIcon = faGithub;
  corporationIcon = faHatWizard;

  constructor() { }

  ngOnInit(): void {
  }

}

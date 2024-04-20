import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private router: Router) {}


  public termasromanas(){
    this.router.navigateByUrl('/termasromanas')
  }
  public termasatuais(){
    this.router.navigateByUrl('/termasatuais')
  }
  public ponte(){
    this.router.navigateByUrl('/ponte-romana')
  }
  public castelo(){
    this.router.navigateByUrl('/castelo-chaves')
  }

}

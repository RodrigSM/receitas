import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page implements OnInit{

  public receitas: any;

  constructor(private router: Router) {}
  
    ngOnInit() {
      this.introduzireceita();
    }

    introduzireceita(){
      fetch('./assets/receitas.json')
        .then(res=>res.json())
        .then(json=>
        {
          this.receitas=json;
        });
    }

    public verReceita(receitas: any){

      let InfoReceita: NavigationExtras;
      InfoReceita = {
        state: {
          receita: receitas
        }
      };
    this.router.navigate(['receitas-individual'], InfoReceita);


    }
}

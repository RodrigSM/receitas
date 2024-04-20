import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-receitas-individual',
  templateUrl: './receitas-individual.page.html',
  styleUrls: ['./receitas-individual.page.scss'],
})
export class ReceitasIndividualPage implements OnInit {

  public InfoReceita:any;
  

  constructor(private router: Router, private rotaAtiva: ActivatedRoute, private http: HttpClient ) { }

  


  ngOnInit() {
    this.rotaAtiva.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.InfoReceita = this.router.getCurrentNavigation().extras.state.receita;
        console.log(this.InfoReceita);
      }
    });
    
  }
  carregarInfoReceita() {
    this.http.get<any>('assets/receitas.json').subscribe(
      data => {
        this.InfoReceita = data;
      },
      error => {
        console.error('Erro ao carregar os dados da receita:', error);
      }
    );
  }
  obterChavesIngredientes() {
    return Object.keys(this.InfoReceita.receita.ingredientes);
  }


}

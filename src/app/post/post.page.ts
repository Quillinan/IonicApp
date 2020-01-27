import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  constructor() { }

  	nome_do_usuario:string;
  	texto:string;
  	horario:number;
  	numero_like:number = 0;
  	numero_deslike:number;
  	episodio:number;
  	comentario:string;
  	//anexo
  	compartilhamento:number;

  	like():void{
  		this.numero_like++;
  	}


  ngOnInit() {
  }

}

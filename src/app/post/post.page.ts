import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  replys;

  constructor() {
    this.replys = [  // Lista reply que será chamada no for com valores pré-definidos que são alterados com as demais funções
      {reply_nome : 'Joao',
      reply_texto : 'Muito ruim a morte do protagonista',
      reply_data : '3 semanas',
      numero_like: 0,
      numero_dislike: 4,
      like_state: false,
      dislike_state: true,
      spoiler_state: null,
      },
      {reply_nome : 'Maria',
      reply_texto : 'Se te vejo na rua te mato',
      reply_data : '2 semanas',
      numero_like: 4,
      numero_dislike: 0,
      like_state: true,
      dislike_state: false,
      spoiler_state: null,
      },
      {reply_nome : 'Adalberto',
      reply_texto : 'Reza pra genta nunca esbarrar',
      reply_data : '2 semanas',
      numero_like: 4,
      numero_dislike: 0,
      like_state: true,
      dislike_state: false,
      spoiler_state: null,
      },
      {reply_nome : 'Creusa',
      reply_texto : 'Cade os adm dessa joça??',
      reply_data : '1 semana',
      numero_like: 4,
      numero_dislike: 0,
      like_state: false,
      dislike_state: false,
      spoiler_state: null,
      },
      {reply_nome : 'Lurdes',
      reply_texto : 'BANE ELE!!!!',
      reply_data : '6 dias',
      numero_like: 4,
      numero_dislike: 0,
      like_state: true,
      dislike_state: false,
      spoiler_state: null,
      },
      {reply_nome : 'Alvaro',
      reply_texto : 'Ufa o sistema de spoilers me salvou',
      reply_data : '5 dias',
      numero_like: 2,
      numero_dislike: 0,
      like_state: true,
      dislike_state: false,
      spoiler_state: null,
      }
    ]
   }


  	nome_do_usuario:string;
  	texto:string;
  	reply_texto:string;
    reply_nome:string;
    reply_data:string;
  	compartilhamento:number;
    numero_like:number;
    numero_dislike:number;
    like_state:boolean;
    dislike_state:boolean;
    spoiler_state:number = null;


    public like(reply: any):void{ // Função que define as cores a partir do like_state e balanceia os números de likes.
      if (reply.like_state){
        reply.numero_like--;
        reply.like_state = false;
      }
      else{
        reply.numero_like++;
        reply.like_state = true;
        if(reply.dislike_state){
          reply.dislike_state = false;
          reply.numero_dislike--;
        }
      }

      }

      public dislike(reply: any):void{ // Função que define as cores a partir do dislike_state e balanceia os números de dislikes.
        if (reply.dislike_state){
          reply.numero_dislike--;
          reply.dislike_state = false;
        }
        else{
          reply.numero_dislike++;
          reply.dislike_state = true;
          if(reply.like_state){
            reply.like_state = false;
            reply.numero_like--;
          }
        }

        }

        public spoiler(reply: any):void{ // Função que define altera o spoiler_state para ativar o aviso.
          if(reply.spoiler_state == null){
            reply.spoiler_state = 1;
          }
          else{
            reply.spoiler_state = null;
          }

        }






}

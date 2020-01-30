import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  replys;

  constructor() {
    this.replys = [
      {reply_nome : 'Joao',
      reply_texto : 'Muito ruim a morte do protagonista',
      reply_data : '3 semanas',
      numero_like: 0,
      numero_deslike: 4,
      like_state: false,
      deslike_state: true,
      },
      {reply_nome : 'Maria',
      reply_texto : 'Se te vejo na rua te mato',
      reply_data : '2 semanas',
      numero_like: 4,
      numero_deslike: 0,
      like_state: true,
      deslike_state: false,
      },
      {reply_nome : 'Adalberto',
      reply_texto : 'Reza pra genta nunca esbarrar',
      reply_data : '2 semanas',
      numero_like: 4,
      numero_deslike: 0,
      like_state: true,
      deslike_state: false,
      },
      {reply_nome : 'Creusa',
      reply_texto : 'Cade os adm dessa joça??',
      reply_data : '1 semana',
      numero_like: 4,
      numero_deslike: 0,
      like_state: false,
      deslike_state: false,
      },
      {reply_nome : 'Lurdes',
      reply_texto : 'BANE ELE!!!!',
      reply_data : '6 dias',
      numero_like: 4,
      numero_deslike: 0,
      like_state: true,
      deslike_state: false,
      },
      {reply_nome : 'Alvaro',
      reply_texto : 'Ufa o sistema de spoiler me salvou',
      reply_data : '5 dias',
      numero_like: 2,
      numero_deslike: 0,
      like_state: true,
      deslike_state: false,
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
    numero_deslike:number;
    like_state:boolean;
    deslike_state:boolean;
    spoiler_state:boolean = false;



    public like(reply: any):void{
      if (reply.like_state){
        reply.numero_like--;
        reply.like_state = false;
      }
      else{
        reply.numero_like++;
        reply.like_state = true;
        if(reply.deslike_state){
          reply.deslike_state = false;
          reply.numero_deslike--;
        }
      }

      }

      public deslike(reply: any):void{
        if (reply.deslike_state){
          reply.numero_deslike--;
          reply.deslike_state = false;
        }
        else{
          reply.numero_deslike++;
          reply.deslike_state = true;
          if(reply.like_state){
            reply.like_state = false;
            reply.numero_like--;
          }
        }

        }

        public spoiler(reply: any):void{
          this.spoiler_state = true;

        }






}

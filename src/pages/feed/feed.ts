import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {

  public objeto_feed = {
    titulo: "Diego Araujo",
    data: "November 5, 1955",
    imagem_avatar: "assets/imgs/marty-avatar.png",
    imagem_src: "assets/imgs/advance-card-bttf.png",
    descricao: "Wait are you teeling me that you built a time machine?!",
    likes: 12,
    comments: 4,
    time_comments: "11h ago"
  }

  public lista_filmes = new Array<any>();
  //public baseUrlPoster = "https://image.tmdb.org/t/p/w185_and_h278_bestv2/";
  public baseUrlPoster = "https://image.tmdb.org/t/p/w500";

  public nome_usuario: string = "Diego Araujo";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider
  ) {
  }

  public somaDoisNumeros(num1: number, num2: number): void {
    alert(num1 + num2);
  }

  ionViewDidLoad() {
    //this.somaDoisNumeros(10, 99);
    this.movieProvider.getLatestMovies().subscribe(
      data => {
        const response = (data as any);
        this.lista_filmes = response.results;
        console.log(data);
      }, error => {
        console.log(error);
      }
    )
  }

}

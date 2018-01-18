import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FilmeDetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filme-detalhes',
  templateUrl: 'filme-detalhes.html',
  providers:[
    MovieProvider
  ]
})
export class FilmeDetalhesPage {
  public filme;
  public filmeid;

  public baseUrlPoster = "https://image.tmdb.org/t/p/w500";

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

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MovieProvider,
  ) {
  }

  ionViewDidEnter() {
    this.filmeid = this.navParams.get("id");
    this.movieProvider.getMovieDetails(this.filmeid).subscribe(
      data => {
        const response = (data as any);
        this.filme = (response)
        //this.filme = response.results;
        console.log(this.filme);
      }, error => {
        console.log(error);
      }
  )
  }

}

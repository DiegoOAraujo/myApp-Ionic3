import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { FilmeDetalhesPage } from '../filme-detalhes/filme-detalhes';

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

  public loader;
  public refresher;
  public isRefreshing: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider,
    public loadingCtrl: LoadingController
  ) {
  }

  abreCarregando() {
    this.loader = this.loadingCtrl.create({
      content: "Aguarde, Carregando...",
    });
    this.loader.present();
  }

  fechaCarregando() {
    this.loader.dismiss();
  }

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;
    this.carregarFilmes();
  }


  public somaDoisNumeros(num1: number, num2: number): void {
    alert(num1 + num2);
  }

  ionViewDidEnter() {
    this.carregarFilmes();
  }

  carregouFilmes() {
    this.fechaCarregando();
    if (this.isRefreshing) {
      this.refresher.complete();
      this.isRefreshing = false;
    }
  }

  abrirDetalhes(filme){
    console.log(filme);
    this.navCtrl.push(FilmeDetalhesPage, {id: filme.id});
  }

  carregarFilmes() {
    this.abreCarregando();
    this.movieProvider.getPopularMovies().subscribe(
      data => {
        const response = (data as any);
        this.lista_filmes = response.results;
        console.log(data);
        this.carregouFilmes();
      }, error => {
        console.log(error);
        this.carregouFilmes();
      }
    )
  }

}

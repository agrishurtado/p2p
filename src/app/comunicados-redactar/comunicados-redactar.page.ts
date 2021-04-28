import { Component, OnInit } from '@angular/core';
import { Plugins , CameraResultType, CameraOptions} from '@capacitor/core';
import { ComunicadoI }from '../models/comunicados.interface';
import { ComunicadosService } from '../services/comunicados.service'
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController, AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

var base64data = null;
const {Camera} = Plugins;
@Component({
  selector: 'app-comunicados-redactar',
  templateUrl: './comunicados-redactar.page.html',
  styleUrls: ['./comunicados-redactar.page.scss'],
})
export class ComunicadosRedactarPage implements OnInit {
  comunicado: ComunicadoI = {
    titulo: '',
    fechaHora: '',
    Mensaje: '',
    image: ''
  };
  comunicadoId= null;
  id: any;

  constructor(private route: ActivatedRoute,
    private nav: NavController,
    private authService: AuthService,
    private comunicadoService: ComunicadosService,
    private loadingController: LoadingController,
    private alertCtrl: AlertController
  ) { }

  ngOnInit(){
    this.authService.getUserAuth().subscribe(user => {
      this.id = user.uid
    });
    
    this.comunicadoId = this.route.snapshot.params['id'];
    if(this.comunicadoId){
      this.loadComunicado();
    }
  }

  async loadComunicado(){
    const loading = await this.loadingController.create({
      message: 'Cargando...'
    });
    await loading.present();
    this.comunicadoService.getComunicado(this.comunicadoId).subscribe(res => {
      loading.dismiss();
      this.comunicado = res;
    });
  }

  async saveComunicado(){
    const loading = await this.loadingController.create({
      message: 'Guardando...'
    });
    await loading.present();
    this.comunicado.image = base64data == "" || base64data == null ? this.comunicado.image : base64data;
    if(this.comunicadoId){
      this.comunicadoService.updateComunicado(this.comunicado, this.comunicadoId).then(() => {
        loading.dismiss();
        this.nav.navigateForward('/comunicados');
      });
    }
    else{
      this.comunicadoService.addComunicado(this.comunicado).then(() => {
        loading.dismiss();
        this.nav.navigateForward('/comunicados');
      });
    }    
  }  

  loadImageFromDevice() {  
    const images: CameraOptions = {
      quality: 50,
      resultType: CameraResultType.Base64,
      allowEditing: true
    }
    Camera.getPhoto(images).then(imgdata => {
      base64data = 'data:image/jpeg;base64,' + imgdata.base64String;
    });
  }
}

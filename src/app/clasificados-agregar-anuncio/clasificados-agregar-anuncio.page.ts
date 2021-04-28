import { Component, OnInit  } from '@angular/core';
import { ClasificadoI }from '../models/clasificados.interface';
import { ClasificadosService } from '../services/clasificados.service'
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController, AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { Plugins , CameraResultType, CameraOptions} from '@capacitor/core';

var base64data = null;
const {Camera} = Plugins;
@Component({
  selector: 'app-clasificados-agregar-anuncio',
  templateUrl: './clasificados-agregar-anuncio.page.html',
  styleUrls: ['./clasificados-agregar-anuncio.page.scss'],
})
export class ClasificadosAgregarAnuncioPage implements OnInit {
  clasificado: ClasificadoI = {
    nombre: '',
    telefono: '',
    precio: null,
    producto: '',
    descripcion: '',
    image: '',
    fecha: ''
  };
  clasificadoId= null;
  id: any;
  fecha: Date= new Date();


  constructor(private route: ActivatedRoute,
    private nav: NavController,
    private authService: AuthService,
    private clasificadoService: ClasificadosService,
    private loadingController: LoadingController,
    private alertCtrl: AlertController
  ) { }

  ngOnInit(){
    this.authService.getUserAuth().subscribe(user => {
      this.id = user.uid
    });
    
    this.clasificadoId = this.route.snapshot.params['id'];
    if(this.clasificadoId){
      this.loadClasificado();
    }
  }

  async loadClasificado(){
    const loading = await this.loadingController.create({
      message: 'Cargando...'
    });
    await loading.present();
    this.clasificadoService.getClasificado(this.clasificadoId).subscribe(res => {
      loading.dismiss();
      this.clasificado = res;
    }); 
  }

  async saveClasificado(){
    const loading = await this.loadingController.create({
      message: 'Guardando...'
    });
    await loading.present();
    this.clasificado.image = base64data == "" || base64data == null ? this.clasificado.image : base64data;
    if(this.clasificadoId){
      this.clasificadoService.updateClasificado(this.clasificado, this.clasificadoId).then(() => {
        loading.dismiss();
        this.nav.navigateForward('/clasificados');
      });
    }
    else{
      this.clasificadoService.addClasificado(this.clasificado).then(() => {
        loading.dismiss();
        this.nav.navigateForward('/clasificados');
      });
    }    
  }

  async onRemove(idClasificado:string){
    const alert = await this.alertCtrl.create({
        message: '&Eacute;sta acción eliminará el clasificado, ¿Continuar?',
        buttons: [
          {
              text: 'Si',
              handler: () => {
                this.clasificadoService.removeClasificado(this.clasificadoId);
                this.nav.navigateForward('/clasificados');
              }
          },            
            {
              text: 'No',
              handler: () => {
            }
          }
        ]
    });
    await alert.present();
  }

  loadImageFromDevice() {  
    const images: CameraOptions = {
      quality: 5,
      resultType: CameraResultType.Base64,
      allowEditing: true
    }
    Camera.getPhoto(images).then(imgdata => {
      base64data = 'data:image/jpeg;base64,' + imgdata.base64String;
    });
  }
}
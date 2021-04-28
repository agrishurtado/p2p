import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-img-modal',
  templateUrl: './img-modal.page.html',
  styleUrls: ['./img-modal.page.scss'],
})
export class ImgModalPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  @Input('image')img: any;
  image: any;

  sliderOpts = {
    zoom: true
  };
  constructor(private modalController: ModalController) { }
 
  ngOnInit() {
  }

  ionViewDidEnter(){
    this.slides.update();
  }
 
  async zoom(zoomIn: boolean) {
    const slider = await this.slides.getSwiper();
    const zoom = slider.zoom;
    zoomIn ? zoom.in() : zoom.out();
  }
 
  close() {
    this.modalController.dismiss();
  }

}

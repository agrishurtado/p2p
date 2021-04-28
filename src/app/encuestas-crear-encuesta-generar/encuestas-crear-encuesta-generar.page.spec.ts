import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EncuestasCrearEncuestaGenerarPage } from './encuestas-crear-encuesta-generar.page';

describe('EncuestasCrearEncuestaGenerarPage', () => {
  let component: EncuestasCrearEncuestaGenerarPage;
  let fixture: ComponentFixture<EncuestasCrearEncuestaGenerarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncuestasCrearEncuestaGenerarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EncuestasCrearEncuestaGenerarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

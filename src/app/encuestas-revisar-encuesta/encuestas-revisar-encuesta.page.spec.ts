import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EncuestasRevisarEncuestaPage } from './encuestas-revisar-encuesta.page';

describe('EncuestasRevisarEncuestaPage', () => {
  let component: EncuestasRevisarEncuestaPage;
  let fixture: ComponentFixture<EncuestasRevisarEncuestaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncuestasRevisarEncuestaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EncuestasRevisarEncuestaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

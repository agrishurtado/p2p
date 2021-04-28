import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConfiguracionRegistroCondominoPage } from './configuracion-registro-condomino.page';

describe('ConfiguracionRegistroCondominoPage', () => {
  let component: ConfiguracionRegistroCondominoPage;
  let fixture: ComponentFixture<ConfiguracionRegistroCondominoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguracionRegistroCondominoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfiguracionRegistroCondominoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

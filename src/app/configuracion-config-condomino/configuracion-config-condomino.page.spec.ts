import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConfiguracionConfigCondominoPage } from './configuracion-config-condomino.page';

describe('ConfiguracionConfigCondominoPage', () => {
  let component: ConfiguracionConfigCondominoPage;
  let fixture: ComponentFixture<ConfiguracionConfigCondominoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguracionConfigCondominoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfiguracionConfigCondominoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

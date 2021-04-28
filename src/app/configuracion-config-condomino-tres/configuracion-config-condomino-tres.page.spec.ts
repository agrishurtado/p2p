import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConfiguracionConfigCondominoTresPage } from './configuracion-config-condomino-tres.page';

describe('ConfiguracionConfigCondominoTresPage', () => {
  let component: ConfiguracionConfigCondominoTresPage;
  let fixture: ComponentFixture<ConfiguracionConfigCondominoTresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguracionConfigCondominoTresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfiguracionConfigCondominoTresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

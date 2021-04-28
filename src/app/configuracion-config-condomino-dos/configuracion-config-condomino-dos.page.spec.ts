import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConfiguracionConfigCondominoDosPage } from './configuracion-config-condomino-dos.page';

describe('ConfiguracionConfigCondominoDosPage', () => {
  let component: ConfiguracionConfigCondominoDosPage;
  let fixture: ComponentFixture<ConfiguracionConfigCondominoDosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguracionConfigCondominoDosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfiguracionConfigCondominoDosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

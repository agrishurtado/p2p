import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComunicadosRedactarPage } from './comunicados-redactar.page';

describe('ComunicadosRedactarPage', () => {
  let component: ComunicadosRedactarPage;
  let fixture: ComponentFixture<ComunicadosRedactarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunicadosRedactarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComunicadosRedactarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

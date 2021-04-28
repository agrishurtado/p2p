import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClasificadosAgregarAnuncioPage } from './clasificados-agregar-anuncio.page';

describe('ClasificadosAgregarAnuncioPage', () => {
  let component: ClasificadosAgregarAnuncioPage;
  let fixture: ComponentFixture<ClasificadosAgregarAnuncioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasificadosAgregarAnuncioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClasificadosAgregarAnuncioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

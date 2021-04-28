import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccesosRegistrarVisitaPage } from './accesos-registrar-visita.page';

describe('AccesosRegistrarVisitaPage', () => {
  let component: AccesosRegistrarVisitaPage;
  let fixture: ComponentFixture<AccesosRegistrarVisitaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccesosRegistrarVisitaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccesosRegistrarVisitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

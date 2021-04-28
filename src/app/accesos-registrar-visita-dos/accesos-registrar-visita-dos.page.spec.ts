import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccesosRegistrarVisitaDosPage } from './accesos-registrar-visita-dos.page';

describe('AccesosRegistrarVisitaDosPage', () => {
  let component: AccesosRegistrarVisitaDosPage;
  let fixture: ComponentFixture<AccesosRegistrarVisitaDosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccesosRegistrarVisitaDosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccesosRegistrarVisitaDosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

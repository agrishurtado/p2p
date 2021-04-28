import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReservacionesMisReservacionesPage } from './reservaciones-mis-reservaciones.page';

describe('ReservacionesMisReservacionesPage', () => {
  let component: ReservacionesMisReservacionesPage;
  let fixture: ComponentFixture<ReservacionesMisReservacionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservacionesMisReservacionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReservacionesMisReservacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

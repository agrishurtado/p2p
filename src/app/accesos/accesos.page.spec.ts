import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccesosPage } from './accesos.page';

describe('AccesosPage', () => {
  let component: AccesosPage;
  let fixture: ComponentFixture<AccesosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccesosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccesosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

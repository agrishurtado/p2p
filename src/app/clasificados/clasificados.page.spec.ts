import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClasificadosPage } from './clasificados.page';

describe('ClasificadosPage', () => {
  let component: ClasificadosPage;
  let fixture: ComponentFixture<ClasificadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasificadosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClasificadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

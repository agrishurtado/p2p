import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImgModalPage } from './img-modal.page';

describe('ImgModalPage', () => {
  let component: ImgModalPage;
  let fixture: ComponentFixture<ImgModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImgModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

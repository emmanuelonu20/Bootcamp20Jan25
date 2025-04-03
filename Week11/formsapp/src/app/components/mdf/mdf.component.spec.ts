import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdfComponent } from './mdf.component';

describe('MdfComponent', () => {
  let component: MdfComponent;
  let fixture: ComponentFixture<MdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MdfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

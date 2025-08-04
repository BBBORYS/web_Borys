import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoInicio } from './cuerpo-inicio';

describe('CuerpoInicio', () => {
  let component: CuerpoInicio;
  let fixture: ComponentFixture<CuerpoInicio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuerpoInicio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuerpoInicio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

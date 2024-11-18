import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioPdfComponent } from './relatorio-pdf.component';

describe('RelatorioPdfComponent', () => {
  let component: RelatorioPdfComponent;
  let fixture: ComponentFixture<RelatorioPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatorioPdfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

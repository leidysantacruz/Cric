import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevizualizacionInfoComponent } from './previzualizacion-info.component';

describe('PrevizualizacionInfoComponent', () => {
  let component: PrevizualizacionInfoComponent;
  let fixture: ComponentFixture<PrevizualizacionInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrevizualizacionInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrevizualizacionInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

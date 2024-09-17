import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KANBANBOARDComponent } from './kanban-board.component';

describe('KANBANBOARDComponent', () => {
  let component: KANBANBOARDComponent;
  let fixture: ComponentFixture<KANBANBOARDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KANBANBOARDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KANBANBOARDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

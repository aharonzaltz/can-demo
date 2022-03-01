import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextToSyllablesComponent } from './text-to-syllables.component';

describe('TextToSyllablesComponent', () => {
  let component: TextToSyllablesComponent;
  let fixture: ComponentFixture<TextToSyllablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextToSyllablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextToSyllablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

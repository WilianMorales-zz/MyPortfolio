import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebSkillComponent } from './web-skill.component';

describe('WebSkillComponent', () => {
  let component: WebSkillComponent;
  let fixture: ComponentFixture<WebSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebSkillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

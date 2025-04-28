import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenseStoryListComponent } from './dense-story-list.component';

describe('DenseStoryListComponent', () => {
  let component: DenseStoryListComponent;
  let fixture: ComponentFixture<DenseStoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DenseStoryListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DenseStoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

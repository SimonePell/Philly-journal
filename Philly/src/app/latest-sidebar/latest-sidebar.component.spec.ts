import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestSidebarComponent } from './latest-sidebar.component';

describe('LatestSidebarComponent', () => {
  let component: LatestSidebarComponent;
  let fixture: ComponentFixture<LatestSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

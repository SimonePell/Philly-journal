import { Component } from '@angular/core';
import { DenseStoryListComponent } from '../dense-story-list/dense-story-list.component';
import { SectionHeaderComponent } from '../section-header/section-header.component';
import { StoryCardComponent } from '../story-card/story-card.component';

@Component({
  selector: 'app-main-sections',
  imports: [
    DenseStoryListComponent,
    SectionHeaderComponent,
    StoryCardComponent
  ],
  templateUrl: './main-sections.component.html',
  styleUrl: './main-sections.component.css'
})
export class MainSectionsComponent {

}

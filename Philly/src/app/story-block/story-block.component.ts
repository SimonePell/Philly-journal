import { Component } from '@angular/core';
import { LatestSidebarComponent } from '../latest-sidebar/latest-sidebar.component';

@Component({
  selector: 'app-story-block',
  imports: [
    LatestSidebarComponent
  ],
  templateUrl: './story-block.component.html',
  styleUrl: './story-block.component.css'
})
export class StoryBlockComponent {

}

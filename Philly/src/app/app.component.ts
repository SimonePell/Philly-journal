import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DenseStoryListComponent } from './dense-story-list/dense-story-list.component';
import { LatestSidebarComponent } from './latest-sidebar/latest-sidebar.component';
import { MainSectionsComponent } from './main-sections/main-sections.component';
import { NewsletterBarComponent } from './newsletter-bar/newsletter-bar.component';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { StoryBlockComponent } from './story-block/story-block.component';
import { StoryCardComponent } from './story-card/story-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    DenseStoryListComponent,
    LatestSidebarComponent,
    NewsletterBarComponent,
    SectionHeaderComponent,
    StoryBlockComponent,
    StoryCardComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'philly';
}

import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NewsComponent } from './news/news.component';
import { ReadsComponent } from './reads/reads.component'; 
import { SubscribersComponent } from './subscribers/subscribers.component';
import { SportsComponent } from './sports/sports.component';
import { PoliticsComponent } from './politics/politics.component';
import { NewslettersComponent } from './newsletters/newsletters.component';
import { WorldComponent } from './world/world.component';
import { HealthComponent } from './health/health.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    NewsComponent,
    ReadsComponent,
    SubscribersComponent,
    SportsComponent,
    PoliticsComponent,
    NewslettersComponent,
    WorldComponent,
    HealthComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'philly';
}

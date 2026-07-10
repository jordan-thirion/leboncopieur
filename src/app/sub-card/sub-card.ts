import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-sub-card',
  imports: [AppModule],
  templateUrl: './sub-card.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./sub-card.scss']
})
export class SubCardComponent {
  scrollTo(element: any): void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}

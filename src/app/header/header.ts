import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AppModule } from '../app.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [AppModule, RouterLink],
  templateUrl: './header.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./header.scss']
})
export class HeaderComponent {
  scrollTo(element: any): void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}

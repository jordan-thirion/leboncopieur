import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ContactComponent } from '../contact/contact';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-maintenance',
  imports: [AppModule, ContactComponent],
  templateUrl: './maintenance.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./maintenance.scss']
})
export class MaintenanceComponent {
  scrollTo(element: any): void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}

import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AppModule } from './app.module';
import { FooterComponent } from './footer/footer';
import { HeaderComponent } from './header/header';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [AppModule, HeaderComponent, RouterOutlet, FooterComponent],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./app.css']
})
export class App {
}

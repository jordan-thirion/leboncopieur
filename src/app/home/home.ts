import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ItemCardComponent } from '../item-card/item-card';
import { ContactComponent } from '../contact/contact';
import { SubCardComponent } from '../sub-card/sub-card';
import { AppModule } from '../app.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [AppModule, ItemCardComponent, ContactComponent, SubCardComponent, RouterLink],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./home.scss']
})
export class HomeComponent {
  scrollTo(element: any): void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  items = ["/img/alpetudes.png", "/img/rgf.png", "/img/axa.svg", "/img/damac.svg", "/img/arti.png", "/img/acor.png", 
    "/img/mermet.png", "/img/teleradio.png", "/img/etsdouchet.png", "/img/arcm26.png", "/img/cedigraphe.png"];

  currentIndex = 0;

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length + 3;
    if(this.currentIndex >= this.items.length) {
      this.currentIndex = 0;
    }
  }

  prev() {
    if(this.currentIndex < 0) {
      this.currentIndex = this.items.length;
    }
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length - 3;
  }
}

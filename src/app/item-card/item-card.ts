import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-item-card',
  imports: [AppModule],
  templateUrl: './item-card.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./item-card.scss']
})
export class ItemCardComponent {
  @Input() img: string = '';
  @Input() title: string = '';
  @Input() subTitle: string = '';
  @Input() text: string = '';
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cardone',
  templateUrl: './cardone.component.html',
  styleUrls: ['./cardone.component.scss']
})
export class CardoneComponent {
  @Input() title!: string;
}

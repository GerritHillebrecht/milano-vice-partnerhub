import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ticket-divider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ticket-divider.component.html',
  styleUrl: './ticket-divider.component.scss',
})
export class TicketDividerComponent {
  @Input()
  protected readonly holes: boolean = true;
}

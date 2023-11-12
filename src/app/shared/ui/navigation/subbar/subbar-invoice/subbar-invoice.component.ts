import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { faDownload, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import {
  DateSelectionService,
  TimePeriod,
} from '../../../../service/date-selection/date-selection.service';

@Component({
  selector: 'app-subbar-invoice',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './subbar-invoice.component.html',
  styleUrl: './subbar-invoice.component.scss',
  host: { ngSkipHydration: 'true' },
})
export class SubbarInvoiceComponent {
  protected readonly downloadIcon = signal(faDownload);
  protected readonly sendMailIcon = signal(faPaperPlane);

  protected readonly dateSelectionService = inject(DateSelectionService);

  protected range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  ngOnInit(): void {
    this.range.valueChanges.subscribe((value) => {
      if (!value.start || !value.end) return;
      this.dateSelectionService.updateCurrentDatePeriod({
        from: value.start,
        to: value.end,
      } as TimePeriod);
    });
  }

  onSelectionChange(period: TimePeriod) {
    this.dateSelectionService.updateCurrentDatePeriod(period);
  }
}

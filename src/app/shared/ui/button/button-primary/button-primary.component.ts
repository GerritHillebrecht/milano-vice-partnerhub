import { Component, Input, signal } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatRippleModule } from '@angular/material/core';

export interface ButtonPrimaryOptions {
  icon: IconDefinition | null;
  onClick: (() => void) | null;
  btnType: 'primary' | 'secondary';
  type: 'button' | 'submit' | 'reset';
}

@Component({
  selector: 'app-button-primary',
  standalone: true,
  imports: [CommonModule, NgIf, FontAwesomeModule, MatRippleModule],
  templateUrl: './button-primary.component.html',
  styleUrl: './button-primary.component.scss',
})
export class ButtonPrimaryComponent {
  @Input() set options(optionsValue: Partial<ButtonPrimaryOptions>) {
    this.btnOptions.update((currentValue) => ({
      ...currentValue,
      ...optionsValue,
    }));
  }

  protected readonly btnOptions = signal<ButtonPrimaryOptions>({
    icon: null,
    onClick: null,
    type: 'button',
    btnType: 'primary',
  });
}

import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.scss',
})
export default class InvoiceComponent implements OnInit {
  private readonly db = inject(Firestore);

  async ngOnInit(): Promise<void> {
    const collectionRef = collection(this.db, 'invoices');
    const data = await firstValueFrom(
      collectionData(collectionRef, { idField: 'id' })
    );

    console.log('invoice', data);
  }
}

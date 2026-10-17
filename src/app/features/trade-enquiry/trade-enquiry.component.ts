import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-trade-enquiry',
  imports: [FormsModule],
  templateUrl: './trade-enquiry.component.html',
  styleUrl: './trade-enquiry.component.scss',
})
export class TradeEnquiryComponent {
  readonly submitted = signal(false);
}

import { Component } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { Itransaction } from '../../interfaces/itransaction';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transaction',
  standalone: false,
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css'
})
export class TransactionComponent {

  transactions!: Itransaction[];

  constructor(private transactionService: TransactionService){
    this.transactionService.getTransactions().subscribe((result) => {
      this.transactions = result;
      console.log(result)
    })
  }
}

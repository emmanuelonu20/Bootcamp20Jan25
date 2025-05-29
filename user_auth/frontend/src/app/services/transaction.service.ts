import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Itransaction } from '../interfaces/itransaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  getTransactions(){
    return this.http.get<Itransaction[]>('http://localhost:3000/transactions');
  }
}

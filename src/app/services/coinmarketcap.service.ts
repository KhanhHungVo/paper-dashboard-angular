import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Coin } from 'app/models';
import {environment} from '../../environments/environment';
@Injectable()
export class CoinMarketCapService {
    config: any = {
        apiUrl: environment.baseUrl
    };
    constructor(private http: HttpClient){

    }
    getTopCoin() {
        return this.http.get<Coin[]>(`${this.config.apiUrl}/Coin/GetTopCoins`);
    }

    
}
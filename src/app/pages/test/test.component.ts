import { Component, OnInit } from '@angular/core';
import { CoinMarketCapService } from 'app/services/coinmarketcap.service';

declare interface TestData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'test-cmp',
    moduleId: module.id,
    templateUrl: 'test.component.html',
    providers:[CoinMarketCapService]
})

export class TestComponent implements OnInit{
    public testData1: TestData;
    public testData2: TestData;
    isLoading: true;
    constructor(
        private coinMarketCapService: CoinMarketCapService
    ) { }
    ngOnInit(){
        debugger
        this.coinMarketCapService.getTopCoin().subscribe((res) =>{
            debugger
            this.testData1 = {
                headerRow: [ 'ID', 'Name', 'Symbol', 'Price', 'PrecentageChange24h'],
                dataRows: res.map(coin => {
                    // let result = [];
                    // result.push(new Array('1',coin.name,coin.symbol,coin.price, coin.percentChange24h.toString()));
                    return new Array('1',coin.name,coin.symbol,coin.price, coin.percentChange24h.toString());
                })
            };
            console.log(this.testData1)
        });
        
        this.testData2 = {
            headerRow: [ 'ID', 'Name',  'Salary', 'Country', 'City' ],
            dataRows: [
                ['1', 'Dakota Rice','$36,738', 'Niger', 'Oud-Turnhout' ],
                ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'],
                ['3', 'Sage Rodriguez', '$56,142', 'Netherlands', 'Baileux' ],
                ['4', 'Philip Chaney', '$38,735', 'Korea, South', 'Overland Park' ],
                ['5', 'Doris Greene', '$63,542', 'Malawi', 'Feldkirchen in Kärnten', ],
                ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester' ]
            ]
        };
        console.log(this.testData2)
    }
}

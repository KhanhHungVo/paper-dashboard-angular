import { Component, OnInit } from '@angular/core';
import {User} from 'app/models/user';

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit{
    currentUser: User;
 //   currentUserSubscription: Subscription;
    users: User[] = []; 
    ngOnInit(){
        this.currentUser = {    
            id: 1
            ,password: 'test'
            ,username: 'hung'
            ,firstName: 'hung'
            ,lastName: 'vo'
            ,token:'asd'
        };
    }
}

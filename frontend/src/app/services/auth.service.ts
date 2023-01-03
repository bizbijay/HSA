import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

constructor() { }

authUser(user: any){
    let UserArry = [];
    if(localStorage.getItem('Users')){
        UserArry=JSON.parse(localStorage.getItem('Users'));

    }
    return UserArry.find(p => p.userName === user.userName && p.password === user.password);
    
}
}

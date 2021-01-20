import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpCore } from 'src/app/shared/core/http-core';

@Injectable({
    providedIn: 'root'
  })
export class UsersService extends HttpCore {

    constructor(http: HttpClient) {
        super(http, "users");
    }

    public findByUserName(name: string): any {
        return this.get(null, name);
    }

}
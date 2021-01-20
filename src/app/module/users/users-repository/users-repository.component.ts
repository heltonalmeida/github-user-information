import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UsersService } from "../users.service";

@Component({
    selector: 'app-users-repository',
    templateUrl: './users-repository.component.html',
    styleUrls: ['./users-repository.component.scss']
})
export class UsersRepositoryComponent implements OnInit {

    public userName: string;

    constructor(
        private usersService: UsersService,
        private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        this.getUserName();
    }

    private getUserName(): void {
        this.userName = this.activatedRoute.snapshot.params.username;
      }
}
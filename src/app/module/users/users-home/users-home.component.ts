import { Component, OnInit } from "@angular/core";
import { take } from 'rxjs/operators';
import { TableColumn } from "src/app/shared/models/table-column";
import { UsersService } from "../users.service";

@Component({
    selector: 'app-users-home',
    templateUrl: './users-home.component.html',
    styleUrls: ['./users-home.component.scss']
})
export class UsersHomeComponent implements OnInit {

    public filterUser: string;
    public loading = false;
    public userCols: TableColumn[] = [];
    public users: any[] = [];

    constructor(private usersService: UsersService) { }

    ngOnInit(): void {
        this.buildCols();
    }

    public isDisabledButtonBuscar() {
        return !this.filterUser;
    }

    public search(): void {
        if (!this.isDisabledButtonBuscar()) {
            this.loading = true;
            this.usersService.findByUserName(this.filterUser).pipe(take(1))
                .subscribe((response) => {
                    this.users = [response];
                    this.loading = false;
                }, (error) => {
                    this.loading = false;
                }
                );
        }
    }

    private buildCols(): void {
        this.userCols = [
            new TableColumn('Nome', 'name'),
            new TableColumn('Login', 'login'),
            new TableColumn('Repositórios', 'public_repos'),
            new TableColumn('Seguindo', 'following'),
        ];
    }

}
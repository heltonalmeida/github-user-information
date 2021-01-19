import { Input } from "@angular/core";
import { OnInit } from "@angular/core";
import { Component } from "@angular/core";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    
    @Input() description: string;
    @Input() srcImage: string;
    @Input() widthImage: number;
    @Input() heightImage: number;

    constructor() { }

    ngOnInit(): void {
    }

}
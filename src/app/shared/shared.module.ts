
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
    declarations: [NavbarComponent, FooterComponent],
    imports: [
        CommonModule,
        RouterModule,
        HttpClientModule
    ],
    exports: [
        NavbarComponent,
        FooterComponent
    ],
})
export class SharedModule { }
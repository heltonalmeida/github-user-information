import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'src/app/components/button/button.module';
import { InputModule } from 'src/app/components/input/input.module';
import { TableModule } from 'src/app/components/table/table.module';
import { UsersHomeComponent } from './users-home/users-home.component';
import { UsersRouting } from './users.routing';
import { UsersService } from './users.service';

@NgModule({
    declarations: [UsersHomeComponent],
    imports: [
      CommonModule,
      FormsModule,
      UsersRouting,
      InputModule,
      ButtonModule,
      TableModule
    ],
    providers: [
        UsersService
    ],
  })
  export class UsersModule { }
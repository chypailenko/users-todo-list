import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// components
import {AppComponent} from '../../app.component';
import {UsersComponent} from './users.component';
import {PopupComponent} from '../popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PopupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [UsersComponent]
})
export class UsersModule { }

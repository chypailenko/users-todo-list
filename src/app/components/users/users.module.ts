import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

// components
import {UsersComponent} from './users.component';
import {PopupComponent} from '../popup/popup.component';
import {EditPopupComponent} from '../edit-popup/edit-popup.component';

@NgModule({
  declarations: [
    UsersComponent,
    PopupComponent,
    EditPopupComponent,

  ],
  imports: [
   CommonModule,
    FormsModule
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }

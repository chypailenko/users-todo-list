import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppComponent } from './app.component';
// import { UsersComponent } from './users/users.component';
// import {FormsModule} from '@angular/forms';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import { PopupComponent } from './components/popup/popup.component';
import { UsersModule } from './components/users/users.module';
import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    // AppComponent,
    // UsersComponent,
    // PopupComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    // NgbModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

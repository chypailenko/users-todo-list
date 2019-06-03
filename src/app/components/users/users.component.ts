import { Component, OnInit, OnDestroy } from '@angular/core';
import {UsersService} from './users.service';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit, OnDestroy {
  public users: any;
  private newUser = {};
  private modalRef: NgbModalRef;
  private subscription: Subscription;

  constructor(private usersService: UsersService,
              private modalService: NgbModal) { }

  ngOnInit() {
    this.getUsers();
    this.subscription = this.usersService.getObservable().subscribe(users => {
      this.users = users;
    });
  }

  getUsers() {
    this.usersService.get().then(users => {
      this.users = users;
      console.log(users);
    });
  }

  // addUser() {
  //   this.usersService.add(this.newUser).then(() => {
  //     this.newUser = {};
  //     return this.getUsers();
  //   });
  // }

  deleteUser(user) {
    this.usersService.delete(user.id);
    return this.getUsers();
  }

  openModal(template) {
    this.modalRef = this.modalService.open(template, {backdrop: 'static'});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

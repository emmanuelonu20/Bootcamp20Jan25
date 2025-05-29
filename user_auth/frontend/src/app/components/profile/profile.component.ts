import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Iuser } from '../../interfaces/iuser';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  profile!: Iuser;

  constructor(private userService: UserService){
    userService.getProfile().subscribe((result) => {
      this.profile = result;
    });
  }
}

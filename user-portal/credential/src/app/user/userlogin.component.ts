import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mentor } from '../models/mentor.model';
import { User } from '../models/user.model';
import { UserService } from './user.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-userLogin',
  templateUrl: './userlogin.component.html',
  styles: []
})
export class UserLoginComponent {
  // private router1:Router;
  private userservice1:UserService;
  users : Array<User>;
  myForm: FormGroup;
  private usr: string = null;
  private pwd: string = null;
  user: User = new User();
  take: BigInteger;
  mentors:Mentor = new Mentor();
  constructor(private router: Router, private userService: UserService) {
    // router.navigate(['/users'])
  }
  // ngOnInit(){
  //   this.myForm = this.FormGroup({
  //     'Email': new FormControl(null, [Validators.required]),
  //     'Password': new FormControl(null, [Validators.required])
  //    })
  //  }

  searchUser(): void {
      users :  this.userService.searchUser(this.user)
      .subscribe( data => {
        if(data.length != 0)
        {
        alert('Username: '+data[0].email+' Password: '+data[0].password)
        if((data[0].email == this.usr) && (data[0].password == this.pwd))
        {
          alert('permission granted');
          localStorage.setItem('TokenId',data[0].id);
          this.router.navigate(['/homeuser']);
        }
        else
        {
          alert('permission not granted');
        }
      }
      else{
        alert('permission not granted');
      }
      });
     
  };
  getMentor(mentor:Mentor): void {
    this.userService.getMentor(mentor)
  .subscribe( data => {
    if(!data)
    {
        if(data[0].mentorId == this.take )
        {
          alert('permission granted');
        
        }
        else
        {
          alert('record not exist');
        }
  }
  else{
    alert('Please enter mentor id');
  }
  });
  
    

};

}



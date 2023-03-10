import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserServiceService } from 'src/app/services/user-service.service';
import { AlertyfyService } from 'src/app/services/alertyfy.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  
  registrationForm: UntypedFormGroup;
  user: User;
  userSubmitted: boolean;
  constructor(private fb: UntypedFormBuilder, private userService: UserServiceService, private alertyfy: AlertyfyService) { }

  ngOnInit() {
    // this.registrationForm = new FormGroup({
    //   userName: new FormControl(null,[Validators.required]),
    //   email: new FormControl(null, [Validators.required, Validators.email]),
    //   password: new FormControl(null, [Validators.required, Validators.minLength(5)]),
    //   confirmPassword: new FormControl(null, [Validators.required]),
    //   mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])
    // },this.passwordMatchValidator);
    this.createRegistrationForm();
  }

  createRegistrationForm(){
    this.registrationForm= this.fb.group({
      userName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(5)]],
      confirmPassword: [null, Validators.required],
      mobile: [null, [Validators.required, Validators.maxLength(10)]],
    }, {Validators: this.passwordMatchValidator})
  }

  passwordMatchValidator(fg: UntypedFormGroup): Validators {
    return fg.get('password').value === fg.get('confirmPassword').value ? null :
    {notMatched: true};
  }

  //get methods for all form control

  get userName(){
    return this.registrationForm.get('userName') as UntypedFormControl;
  }
  get email(){
    return this.registrationForm.get('email') as UntypedFormControl;
  }
  get password(){
    return this.registrationForm.get('password') as UntypedFormControl;
  }
  get confirmPassword(){
    return this.registrationForm.get('confirmPassword') as UntypedFormControl;
  }
  get mobile(){
    return this.registrationForm.get('mobile') as UntypedFormControl;
  }
  
  onSubmit(){
    console.log(this.registrationForm.value);
    this.userSubmitted=true;
    if(this.registrationForm.valid)
    {
      //this.user= Object.assign(this.user, this.registrationForm.value);
      this.userService.addUser(this.userData());
      this.registrationForm.reset();
      this.userSubmitted=false;
      this.alertyfy.success('User Submitted Successfully');
      
    }
    else
    {
      this.alertyfy.error('Please Provide Requierd inofrmation!!!');
    }
  }

    userData(): User{
      return this.user ={
        userName: this.userName.value,
        email: this.email.value,
        password: this.password.value,
        mobile: this.mobile.value
      }
    }
  
}

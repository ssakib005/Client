import { Component } from '@angular/core';
import { NbLoginComponent } from '@nebular/auth';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
})

export class NgxLoginComponent extends NbLoginComponent {


  // login(){
  //   console.log("Login Click")
  // }

  // loginForm= new FormGroup({
  //   'username': new FormControl('',Validators.required),
  //   'password': new FormControl('',Validators.required)
  // });


  // constructor(
  //   private formBuilder: FormBuilder,
  //   private router: Router,
  //   private toastr: ToastrService,
  //   private authenticationService: AuthenticationService) { }

  // ngOnInit(): void {
  // }
  // onSubmit(){
  //   const payload={
  //     "username":  this.loginForm.value.username,
  //     "password":  this.loginForm.value.password
  //   }
  //   this.authenticationService.login(payload).subscribe(
  //     response => {
  //       localStorage.setItem('token', response.accessToken);
  //       this.toastr.success("Login is successful", "Login");
  //       this.router.navigate(['/home']);
  //     },
  //     error => {
  //       this.toastr.error(error.error, "Login")
  //     }
  //   );
  // }
  // get formFields() {
  //   return this.loginForm.controls;
  // }

}

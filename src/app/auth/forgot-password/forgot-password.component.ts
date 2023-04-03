import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../../services/authentication.service';
// import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm = this.formBuilder.group({
    username: ['', Validators.required]
  });

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    const payload={
      "username":  this.forgotPasswordForm.value.username,
    }
    this.authenticationService.login(payload).subscribe(
      response => {
        this.toastr.success(response.message, "Fogot Password")
      },
      error => {
        this.toastr.error(error.message, "Fogot Password")
      }
    );
  }
  get formFields() {
    return this.forgotPasswordForm.controls;
  }

}

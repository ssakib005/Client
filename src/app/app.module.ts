import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import {
  NbButtonModule,
  NbCardModule,
  NbChatModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbDialogModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbMenuModule,
  NbRadioModule,
  NbSidebarModule,
  NbThemeModule,
  NbToastrModule,
  NbTreeGridModule,
  NbWindowModule,
} from '@nebular/theme';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { NbAuthModule, NbPasswordAuthStrategy } from '@nebular/auth';
import { NgxLoginComponent } from './auth/login/login.component';
import { NgxAuthRoutingModule } from './auth/auth-routing.module';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';
// import { AuthComponent } from './auth/auth.component';

// const formSetting: any = {
//   redirectDelay: 0,
//   showMessages: {
//     success: true,
//   },
// };


@NgModule({
  declarations: [
    AppComponent,
    NgxLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NbCardModule,
    NbInputModule,
    NbCheckboxModule,
    NbIconModule,
    NbInputModule,
    NbButtonModule,
    NbTreeGridModule,
    NbLayoutModule,
    NbRadioModule,
    FormsModule,
    NbThemeModule.forRoot({name: 'dark'}),
    ToastrModule.forRoot(),
    HttpClientModule ,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    ThemeModule.forRoot()
  ],
  providers: [
    AuthGuard,
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

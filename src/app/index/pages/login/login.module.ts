import { LoginPage } from './login.page';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';


const routes: Routes = [
  {
  path: '',
  component: LoginPage
  }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
    ],
  declarations: [LoginPage],
})
export class LoginPageModule { }

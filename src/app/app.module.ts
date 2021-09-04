import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { ListProjectComponent } from './components/list-project/list-project.component';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { ListOrganizationComponent } from './components/list-organization/list-organization.component';
import { AdminOrganizationComponent } from './components/admin/organization/admin-organization.component';
import { AdminCollaboratorComponent } from './components/admin/admin-collaborator/admin-collaborator.component';
import { HistoryComponent } from './components/history/history.component';
import { MembershipComponent } from './components/membership/membership.component';
import { DonationComponent } from './components/donation/donation.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin-organization', component: AdminOrganizationComponent},
  { path: 'admin-collaborator', component: AdminCollaboratorComponent},
  { path: 'createProject', component: CreateProjectComponent},
  { path: 'listProject', component: ListProjectComponent},
  { path: 'list-organization', component: ListOrganizationComponent}, 
  { path: 'history', component: HistoryComponent },
  { path: 'donation', component: DonationComponent },
  { path: 'membership', component: MembershipComponent },
  { path: 'logout:id', component: LoginComponent},
  { path: '**', component:LoginComponent}
];




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ListProjectComponent,
    CreateProjectComponent,
    ListOrganizationComponent,
    AdminOrganizationComponent,
    AdminCollaboratorComponent,
    HistoryComponent,
    MembershipComponent,
    DonationComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

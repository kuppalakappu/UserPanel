import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { LoginComponent } from './pages/login/login.component';
import { StudentheaderComponent } from './components/studentheader/studentheader.component';
import { StudentComponent } from './pages/student/student.component';
import { HttpClientModule } from '@angular/common/http';
import { PopupComponent } from './components/popup/popup.component';
import { AskAnyComponent } from './components/ask-any/ask-any.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    PagenotfoundComponent,
    SidenavComponent,
    LoginComponent,
    StudentheaderComponent,
    StudentComponent,
    PopupComponent,
    AskAnyComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, NgbModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

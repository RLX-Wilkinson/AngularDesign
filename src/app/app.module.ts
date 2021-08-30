import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { UsersService } from './services/users.service';
import { AngularFireDatabaseModule} from '@angular/fire/database';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'angulardesign'),
    AngularFirestoreModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { routing } from './app.routing';

import { AgmCoreModule } from 'angular2-google-maps/core';
import { masterFirebaseConfig } from './api-keys'
import { AngularFireModule } from 'angularfire2';
import { TestComponent } from './test/test.component';
import { KeyPipe } from './key.pipe';
import { AddComponent } from './add/add.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { EditComponent } from './edit/edit.component';
import { PairComponent } from './pair/pair.component';
import { GalleryComponent } from './gallery/gallery.component';
// import { O2UploadToFbsComponent } from 'o2-upload-to-fbs';
import { AddImageComponent } from './add-image/add-image.component';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { ModalModule } from 'angular2-modal';
import { AuthService } from "./auth.service";
import { ProfileComponent } from './profile/profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SplashComponent } from './splash/splash.component';
import { MapComponent } from './map/map.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    KeyPipe,
    // O2UploadToFbsComponent,
    AddComponent,
    UserDetailComponent,
    EditComponent,
    PairComponent,
    GalleryComponent,
    AddImageComponent,
    ProfileComponent,
    SignUpComponent,
    AboutusComponent,
    SplashComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAhAF8qpTLc7riUDOP6h1Ln96pOaGfZAxU'
    })
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

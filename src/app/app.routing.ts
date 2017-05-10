import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { AddComponent } from './add/add.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { PairComponent } from './pair/pair.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SplashComponent } from './splash/splash.component';

const appRoutes: Routes = [
  {
     path: '',
     component: SplashComponent
   },
   {
     path: 'add',
     component: AddComponent
   },{
     path: 'profile/:id',
     component: UserDetailComponent
   },{
      path: 'pair',
      component: PairComponent
    },{
       path: 'gallery',
       component: GalleryComponent
     },{
       path: 'profile',
       component: ProfileComponent
     },{
       path: 'about',
       component: AboutusComponent
     }


];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: true});

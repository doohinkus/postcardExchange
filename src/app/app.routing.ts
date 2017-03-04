import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { AddComponent } from './add/add.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const appRoutes: Routes = [
  {
     path: '',
     component: TestComponent
   },
   {
     path: 'add',
     component: AddComponent
   },{
     path: 'profile/:id',
     component: UserDetailComponent
   }


];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

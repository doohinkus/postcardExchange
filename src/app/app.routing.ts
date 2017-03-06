import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { AddComponent } from './add/add.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { PairComponent } from './pair/pair.component';

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
   },{
      path: 'pair',
      component: PairComponent
    },


];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { AddComponent } from './add/add.component';

const appRoutes: Routes = [
  {
     path: '',
     component: TestComponent
   },
   {
     path: 'add',
     component: AddComponent
   }


];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

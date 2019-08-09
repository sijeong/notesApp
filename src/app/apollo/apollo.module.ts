import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ApolloPage } from './apollo.page';

const routes: Routes = [
  {
    path: '',
    component: ApolloPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ApolloPage],
  entryComponents: [ApolloPage]
})
export class ApolloPageModule {}

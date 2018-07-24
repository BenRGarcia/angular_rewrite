import { NgModule } from '@angular/core';
import {
  MatInputModule,
  MatCardModule,
  MatSidenavModule,
  MatProgressSpinnerModule
} from '@angular/material';

const MODULES = [
  MatInputModule,
  MatCardModule,
  MatSidenavModule,
  MatProgressSpinnerModule
];

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class MaterialModule { }

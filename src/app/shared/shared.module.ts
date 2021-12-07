import { modules as sharedModules } from "@shared/index";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    ...sharedModules,
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,

    ...sharedModules,
  ],
})
export class SharedModule { }

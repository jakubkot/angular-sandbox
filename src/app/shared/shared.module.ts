import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppFilesUploadModule } from './app-files-upload/app-files-upload.module';
import { FilesUploadComponent } from './app-files-upload/components/files-upload/files-upload.component';

@NgModule({
  declarations: [
  ],
  imports: [
    AppFilesUploadModule,
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,

    FilesUploadComponent,
  ],
})
export class SharedModule { }

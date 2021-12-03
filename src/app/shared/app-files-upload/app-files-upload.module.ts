import { NgModule } from '@angular/core';
import { FilesUploadComponent } from './components/files-upload/files-upload.component';
import { FilesUploadFileComponent } from './components/files-upload-file/files-upload-file.component';
import { FilesUploadContentComponent } from './components/files-upload-content/files-upload-content.component';
import { FilesUploadFileDataComponent } from './components/files-upload-file-data/files-upload-file-data.component';
import { FileTypePipe } from './pipes/file-type.pipe';
import { FileUploadModule } from 'primeng/fileupload';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    FilesUploadComponent,
    FilesUploadFileComponent,
    FilesUploadContentComponent,
    FilesUploadFileDataComponent,
    FileTypePipe,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FileUploadModule,
  ],
  exports: [
    FilesUploadComponent,
  ],
})
export class AppFilesUploadModule { }
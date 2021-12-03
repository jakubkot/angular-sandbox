import { Pipe, PipeTransform } from '@angular/core';
import { UploadFileType } from '../types/file.type';

@Pipe({
  name: 'fileType',
})
export class FileTypePipe implements PipeTransform {
  public transform(file: UploadFileType): string {
    return file.constructor.name;
  }
}

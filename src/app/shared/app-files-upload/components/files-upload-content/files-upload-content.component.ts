import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RemoveFileOutput } from '../../interfaces/remove-file-output.interface';
import { FileDataViewModel } from '../../models/file-data.view-model';

@Component({
  selector: 'app-files-upload-content',
  templateUrl: './files-upload-content.component.html',
  styleUrls: ['./files-upload-content.component.scss']
})
export class FilesUploadContentComponent {
  @Input() public files!: (File | FileDataViewModel)[];

  @Output() public onRemoveFileData: EventEmitter<RemoveFileOutput> = new EventEmitter<RemoveFileOutput>();

  public handleOnRemoveFileData(event: RemoveFileOutput): void {
    this.onRemoveFileData.emit(event);
  }
}

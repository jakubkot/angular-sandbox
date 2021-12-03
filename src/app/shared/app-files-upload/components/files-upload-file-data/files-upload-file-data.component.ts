import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FileDataViewModel } from '../../models/file-data.view-model';
import { StoreService } from '../../services/store.service';
import * as _ from 'lodash';
import { RemoveFileOutput } from '../../interfaces/remove-file-output.interface';

@Component({
  selector: 'app-files-upload-file-data',
  templateUrl: './files-upload-file-data.component.html',
  styleUrls: ['./files-upload-file-data.component.scss']
})

export class FilesUploadFileDataComponent {
  @Input() public file!: FileDataViewModel;
  @Input() public index!: number;

  @Output() public onRemove: EventEmitter<RemoveFileOutput> = new EventEmitter<RemoveFileOutput>();

  public constructor(
    private readonly storeService: StoreService,
  ) {
  }

  public handleOnRemove(): void {
    const fileCopy = _.cloneDeep(this.file);

    this.storeService.removeFile(this.index);

    this.onRemove.emit({
      data: this.file,
      restoreFileCallback: () => this.restoreFileCallback(fileCopy),
    });
  }

  private restoreFileCallback(file: FileDataViewModel): void {
    this.storeService.addFile(file, this.index);
  }
}

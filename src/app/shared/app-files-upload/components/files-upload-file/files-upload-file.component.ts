import { Component, Input } from '@angular/core';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-files-upload-file',
  templateUrl: './files-upload-file.component.html',
  styleUrls: ['./files-upload-file.component.scss']
})
export class FilesUploadFileComponent {
  @Input() public file!: File;
  @Input() public index!: number;

  public constructor(
    private readonly storeService: StoreService,
  ) {
  }

  public handleOnRemove(): void {
    this.storeService.removeFile(this.index);
  }
}

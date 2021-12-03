import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AddFilesOutput } from '../../interfaces/add-files-output.interface';
import { RemoveFileOutput } from '../../interfaces/remove-file-output.interface';
import { FileDataViewModel } from '../../models/file-data.view-model';
import { StoreService } from '../../services/store.service';
import { UploadFileType } from '../../types/file.type';

@Component({
  selector: 'app-files-upload',
  templateUrl: './files-upload.component.html',
  styleUrls: ['./files-upload.component.scss']
})
export class FilesUploadComponent implements OnInit {
  @Input()
  set files(files: UploadFileType[]) {
    this.storeService.files = files;
  }

  @Output() public onAddFiles: EventEmitter<AddFilesOutput> = new EventEmitter<AddFilesOutput>();
  @Output() public onRemoveFileData: EventEmitter<RemoveFileOutput> = new EventEmitter<RemoveFileOutput>();

  public files$!: Observable<UploadFileType[]>;

  public constructor(
    private readonly storeService: StoreService,
  ) {
  }

  public ngOnInit(): void {
    this.files$ = this.storeService.files$;
  }

  public handleOnSelect(event: { originalEvent: Event, files: FileList, currentFiles: File[] }): void {
    const files = Array.from(event.files).filter((file) => event.currentFiles.includes(file));

    this.storeService.addFiles(files, 0);

    this.onAddFiles.emit({
      data: files,
      transformFileCallback: (oldFile: File, newFile: FileDataViewModel) => this.transformFile(oldFile, newFile),
    });
  }

  public handleOnRemoveFileData(event: RemoveFileOutput): void {
    this.onRemoveFileData.emit(event);
  }

  private transformFile(oldFile: File, newFile: FileDataViewModel): void {
    const index = this.storeService.files.findIndex((file: UploadFileType) => file === oldFile);

    this.storeService.removeFile(index);
    this.storeService.addFile(newFile, index);
  }
}

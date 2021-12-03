import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UploadFileType } from '../types/file.type';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private filesSource$: BehaviorSubject<UploadFileType[]> = new BehaviorSubject<UploadFileType[]>([]);

  get files$(): Observable<UploadFileType[]> {
    return this.filesSource$.asObservable();
  }

  public get files(): UploadFileType[] {
    return this.filesSource$.value;
  }

  public set files(files: UploadFileType[]) {
    this.filesSource$.next(files);
  }

  public addFile(file: UploadFileType, index = this.files.length): void {
    this.filesSource$.next([
      ...this.files.slice(0, index),
      file,
      ...this.files.slice(index),
    ]);
  }

  public addFiles(files: UploadFileType[], index = this.files.length): void {
    this.filesSource$.next([
      ...this.files.slice(0, index),
      ...files,
      ...this.files.slice(index),
    ]);
  }

  public removeFile(index: number): void {
    this.filesSource$.next([
      ...this.files.slice(0, index),
      ...this.files.slice(index + 1),
    ]);
  }
}

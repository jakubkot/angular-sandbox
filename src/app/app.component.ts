import { Component } from '@angular/core';
import { AddFilesOutput } from './shared/app-files-upload/interfaces/add-files-output.interface';
import { RemoveFileOutput } from './shared/app-files-upload/interfaces/remove-file-output.interface';
import { FileDataViewModel } from './shared/app-files-upload/models/file-data.view-model';
import { SharedModule } from './shared/shared.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jk-sandbox-angular';

  public files = [
    new FileDataViewModel({ id: 1, name: 'obrazek.jpg', size: 1000 }),
    new FileDataViewModel({ id: 2, name: 'obrazek2.jpg', size: 100000 }),
    new FileDataViewModel({ id: 3, name: 'dokument.pdf', size: 123 }),
  ];

  public handleOnRemoveFileData(event: RemoveFileOutput): void {
    console.log('#todo remove api request!');
    // event.restoreFileCallback();
  }

  /**
   *  The order of files is important
   */
  public handleOnAddFiles(event: AddFilesOutput): void {
    event.data.forEach((file: File) => {
      const newFile = new FileDataViewModel({ id: 10, name: 'nowy-plik.pdf', size: 1234 });

      setTimeout(() => event.transformFileCallback(file, newFile), 2000)
    })
    
  }
}

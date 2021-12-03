import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesUploadFileDataComponent } from './files-upload-file-data.component';

describe('FilesUploadFileDataComponent', () => {
  let component: FilesUploadFileDataComponent;
  let fixture: ComponentFixture<FilesUploadFileDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilesUploadFileDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesUploadFileDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

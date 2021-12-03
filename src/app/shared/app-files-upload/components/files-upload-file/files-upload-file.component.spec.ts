import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesUploadFileComponent } from './files-upload-file.component';

describe('FilesUploadFileComponent', () => {
  let component: FilesUploadFileComponent;
  let fixture: ComponentFixture<FilesUploadFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilesUploadFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesUploadFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesUploadContentComponent } from './files-upload-content.component';

describe('FilesUploadContentComponent', () => {
  let component: FilesUploadContentComponent;
  let fixture: ComponentFixture<FilesUploadContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilesUploadContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesUploadContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

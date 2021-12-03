import { FileDataViewModel } from "../models/file-data.view-model";

export interface RemoveFileOutput {
  data: FileDataViewModel;
  restoreFileCallback: CallableFunction;
}
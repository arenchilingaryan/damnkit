import { HTMLAttributes } from 'react';

export type DragAndDropInputProps = HTMLAttributes<HTMLDivElement> & {
  onFilesLoaded: (base64Files: string[]) => void;
  className?: string;
  multiple?: boolean;
  maxFileSize?: number;
};

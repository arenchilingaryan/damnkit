import { HTMLAttributes, ReactNode } from 'react';

export type DragAndDropInputProps = HTMLAttributes<HTMLDivElement> & {
  onFilesLoaded: (base64Files: string[]) => void;
  files: string[];
  className?: string;
  multiple?: boolean;
  maxFileSize?: number;
  draggingText?: string | ReactNode;
  title?: string | ReactNode;
  children?: string | ReactNode | ((dragging: boolean) => string | ReactNode);
  showFiles?: boolean;
};

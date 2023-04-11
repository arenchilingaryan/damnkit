import React, { useCallback, useRef, useState } from 'react';
import { _DragAndDropInput } from 'components/drag-and-drop-input/src/drag-and-drop-input-core';
import { DragAndDropInputProps } from 'components/drag-and-drop-input/src/drag-and-drop-input-types';

const DragAndDropInput: React.FC<DragAndDropInputProps> = ({
  onFilesLoaded,
  className,
  multiple = false,
  maxFileSize = 5 * 1024 * 1024,
}) => {
  const [dragging, setDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileInputClick = useCallback((e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
  }, []);

  const handleFileInputChange = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (files && files.length > 0) {
        const base64Files = await Promise.all(Array.from(files).map(fileToBase64));
        onFilesLoaded(base64Files);
      }
    },
    [onFilesLoaded],
  );

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
  }, []);

  const handleDrop = useCallback(
    async (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setDragging(false);

      const files = e.dataTransfer.files;
      if (files.length > 0) {
        const base64Files = await Promise.all(Array.from(files).map(fileToBase64));
        onFilesLoaded(base64Files);
      }
    },
    [onFilesLoaded],
  );

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      if (file.size > maxFileSize) {
        reject(new Error('File size exceeds the allowed limit.'));
      } else {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
      }
    });
  };

  return (
    <_DragAndDropInput
      className={className}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div>{dragging ? 'Drop here' : 'Drag and drop an image or click to select'}</div>
      <input
        data-testid="file-input"
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple={multiple}
        onChange={handleFileInputChange}
        onMouseDown={handleFileInputClick}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0,
        }}
      />
    </_DragAndDropInput>
  );
};

export default DragAndDropInput;

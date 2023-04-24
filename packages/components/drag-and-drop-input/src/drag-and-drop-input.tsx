import React, { useCallback, useRef, useState } from 'react';
import {
  _DragAndDropCell,
  _DragAndDropContentHeader,
  _DragAndDropInput,
  DragAndDropImage,
} from 'components/drag-and-drop-input/src/drag-and-drop-input-core';
import { DragAndDropInputProps } from 'components/drag-and-drop-input/src/drag-and-drop-input-types';
import { useComponentCommonConfig } from 'hooks/useComponentCommonConfig/useComponentCommonConfig';

const DragAndDropInput: React.FC<DragAndDropInputProps> = ({
  onFilesLoaded,
  className,
  multiple = false,
  maxFileSize = 5 * 1024 * 1024,
  draggingText = 'Drop here',
  title = 'Drag and drop an image or click to select',
  files,
  children,
  showFiles = true,
  ...otherProps
}) => {
  const [dragging, setDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { styles } = useComponentCommonConfig(otherProps, 'button');

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
      filesLength={files.length}
      className={className}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      style={styles}
      {...otherProps}
    >
      {children ? (
        typeof children === 'function' ? (
          children(dragging)
        ) : (
          children
        )
      ) : files.length > 0 ? (
        <div>
          <_DragAndDropContentHeader>
            There are {files.length} {files.length === 1 ? 'image' : 'images'}
          </_DragAndDropContentHeader>
          {showFiles && (
            <_DragAndDropCell>
              {files.map((f, id) => (
                <DragAndDropImage key={id} src={f} />
              ))}
            </_DragAndDropCell>
          )}
        </div>
      ) : (
        <_DragAndDropContentHeader>{dragging ? draggingText : title}</_DragAndDropContentHeader>
      )}
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

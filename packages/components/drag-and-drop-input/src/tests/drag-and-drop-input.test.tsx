import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DragAndDropInput from 'components/drag-and-drop-input/src/drag-and-drop-input';

describe('DragAndDropInput', () => {
  const file = new File(['(⌐□_□)'], 'test.png', { type: 'image/png' });

  test('renders without crashing', () => {
    render(
      <DragAndDropInput
        onFilesLoaded={() => {
          console.log('test');
        }}
      />,
    );
  });

  test('calls onFilesLoaded with base64 string when file is dropped', async () => {
    const onFilesLoaded = jest.fn();
    render(<DragAndDropInput onFilesLoaded={onFilesLoaded} />);

    fireEvent.dragOver(screen.getByText('Drag and drop an image or click to select'));
    expect(screen.getByText('Drop here')).toBeInTheDocument();

    fireEvent.drop(screen.getByText('Drop here'), {
      dataTransfer: { files: [file] },
    });

    await waitFor(() => expect(onFilesLoaded).toHaveBeenCalled());
  });

  test('calls onFilesLoaded with base64 string when file is selected', async () => {
    const onFilesLoaded = jest.fn();
    render(<DragAndDropInput onFilesLoaded={onFilesLoaded} />);

    const input = screen.getByTestId('file-input');
    fireEvent.change(input, { target: { files: [file] } });

    await waitFor(() => expect(onFilesLoaded).toHaveBeenCalled());
  });

  test('supports multiple file selection', async () => {
    const onFilesLoaded = jest.fn();
    render(<DragAndDropInput onFilesLoaded={onFilesLoaded} multiple />);

    const file2 = new File(['(⌐□_□)'], 'test2.png', { type: 'image/png' });
    const input = screen.getByTestId('file-input');
    fireEvent.change(input, { target: { files: [file, file2] } });

    await waitFor(() => expect(onFilesLoaded).toHaveBeenCalledTimes(1));
    expect(onFilesLoaded).toHaveBeenCalledWith(expect.arrayContaining([expect.any(String), expect.any(String)]));
  });
});

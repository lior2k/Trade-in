import React from "react";
import { useDropzone } from "react-dropzone";
import "./FileUploader.css";

interface FileUploaderProps {
  selectedFiles: File[];
  setSelectedFiles: React.Dispatch<React.SetStateAction<File[]>>;
}

const FileUploader: React.FC<FileUploaderProps> = ({
  selectedFiles,
  setSelectedFiles,
}) => {
  const onDrop = (acceptedFiles: File[]) => {
    setSelectedFiles([...selectedFiles, ...acceptedFiles]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      <div
        {...getRootProps()}
        className={`dropzone ${isDragActive ? "drag-active" : ""}`}
      >
        <input {...getInputProps()} />
        <span className="sub-text">להוספה גרור קבצים או לחץ ובחר קבצים</span>
      </div>
      {selectedFiles.length > 0 && (
        <div className="dropzone-file-list-container">
          <h3 className="mini-title">קבצים שנבחרו:</h3>
          <ul>
            {selectedFiles.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FileUploader;

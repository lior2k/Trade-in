import React from 'react';
import { useDropzone } from 'react-dropzone';
import './FileUploader.css';

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
		<div className='dropzone-outer-container'>
			<div
				{...getRootProps()}
				className={`dropzone ${isDragActive ? 'active' : ''}`}
			>
				<input {...getInputProps()} />
				<p>Drag & drop some files here, or click to select files</p>
			</div>
			{selectedFiles.length > 0 && (
				<div className='dropzone-file-list-container'>
					<h4>Selected Files:</h4>
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

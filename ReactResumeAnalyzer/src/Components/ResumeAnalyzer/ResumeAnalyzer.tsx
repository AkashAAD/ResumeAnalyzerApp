import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const ResumeAnalyzer = () => {
  const [file, setFile] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]);
    // You can send this file to a backend API here
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
    },
    multiple: false,
  });

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-lg shadow-lg p-10 max-w-xl w-full text-center">
          <h2 className="text-2xl font-semibold mb-6">Upload Your Resume</h2>
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-10 cursor-pointer transition ${
              isDragActive ? 'border-blue-400 bg-blue-50' : 'border-gray-300'
            }`}
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <p className="text-blue-500">Drop the resume here...</p>
            ) : (
              <p className="text-gray-500">
                Drag & drop your resume here, or <span className="text-blue-600 underline">click to upload</span>
              </p>
            )}
          </div>

          {file && (
            <div className="mt-6 text-left">
              <h4 className="font-medium">Selected file:</h4>
              <p className="text-sm text-gray-700">{file.name}</p>
            </div>
          )}

          <button
            className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            disabled={!file}
            onClick={() => alert('Send to backend or trigger analysis')}
          >
            Analyze Resume
          </button>
        </div>
      </div>    
    </>
  )
}

export default ResumeAnalyzer;

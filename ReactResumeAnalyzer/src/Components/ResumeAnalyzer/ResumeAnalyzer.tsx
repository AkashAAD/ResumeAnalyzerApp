import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import ReactQuill from 'react-quill';
import ResumeAnalysis from './ResumeAnalysis';
import 'react-quill/dist/quill.snow.css';

export default function ResumeAnalyzerForm() {
  const apiUrl =  import.meta.env.VITE_API_URL;
  const [content, setContent] = useState(null);
  const [file, setFile] = useState(null);
  const [jobDescription, setJobDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({});
  const [isModalOpen, setModalOpen] = useState(true);

  const onDrop = (acceptedFiles: any) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
      setMessage({});
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc', '.docx'],
      // Add other mime types if needed
    },
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!file) {
      setMessage({ type: 'error', text: 'Please upload a resume file.' });
      return;
    }

    if (!jobDescription) {
      setMessage({ type: 'error', text: 'Please add job description.' });
      return;
    }    

    setLoading(true);
    setMessage({});

    try {
      const formData = new FormData();
      formData.append('analysis_data[resume]', file);
      formData.append('analysis_data[job_description]', jobDescription);

      const response = await fetch(apiUrl+'/api/v1/ai_feedbacks/resume/ai_feedback', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.statusText}`);
      }

      setContent((await response.json()).candidates[0].content.parts[0].text);
      setMessage({ type: 'success', text: 'Resume analyzed successfully!' });
      // console.log('API result:', result);
    } catch (error) {
      setMessage({ type: 'error', text: error.message || 'Failed to analyze resume.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      {content && <ResumeAnalysis
        content={content}
        isModalOpen={isModalOpen}
        setModalOpen={setModalOpen}/>}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-lg p-10 max-w-5xl w-full text-left"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem',
          alignItems: 'start',
        }}
      >
        <h2 className="text-2xl font-semibold mb-6 col-span-2 text-center">
          Upload Your Resume & Job Description
        </h2>

        {/* Left: File uploader */}
        <div>
          <label
            className="block mb-2 font-medium"
            htmlFor="jobDescription"
          >
            Upload Resume
          </label>
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-10 cursor-pointer transition ${
              isDragActive ? 'border-blue-400 bg-blue-50' : 'border-gray-300'
            }`}
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <p className="text-blue-500 text-center">Drop the resume here...</p>
            ) : (
              <p className="text-gray-500 text-center">
                Drag & drop your resume here, or{' '}
                <span className="text-blue-600 underline">click to upload</span>
              </p>
            )}
          </div>

          {file && (
            <div className="mt-6 text-left">
              <h4 className="font-medium">Selected file:</h4>
              <p className="text-sm text-gray-700">{file.name}</p>
            </div>
          )}
        </div>

        {/* Right: Job description editor */}
        <div className="text-left flex flex-col">
          <label
            className="block mb-2 font-medium"
            htmlFor="jobDescription"
          >
            Job Description
          </label>
          <ReactQuill
            id="jobDescription"
            theme="snow"
            value={jobDescription}
            onChange={setJobDescription}
            placeholder="Enter the job description here..."
            className="bg-white flex-grow"
            style={{ height: '400px' }}
          />
        </div>

        {/* Message and submit button full width below */}
        <p
          className={`mt-4 font-medium col-span-2 ${
            message?.type === 'error' ? 'text-red-600' : 'text-green-600'
          }`}
        >
          {message?.text}
        </p>

        <button
          type="submit"
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 col-span-2 justify-self-center"
          disabled={!file || !jobDescription || loading}
        >
          {loading ? 'Analyzing...' : 'Analyze Resume'}
        </button>
      </form>
    </div>
  );
}

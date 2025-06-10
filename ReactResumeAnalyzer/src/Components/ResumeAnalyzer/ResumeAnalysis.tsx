import ReactMarkdown from 'react-markdown';
import Modal from '../Layout/Modal';

const ResumeAnalysis = ({content, isModalOpen, setModalOpen}) => {
  return(
    <>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h2 className="text-xl font-semibold mb-4">Your Resume Analysis</h2>

        <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: 1.6 }}>
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </Modal>
    </>    
  )
}

export default ResumeAnalysis;

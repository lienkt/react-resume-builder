import { useParams } from 'react-router';
import ResumePreview from '../../components/organisms/resume/ResumePreview'
import { useResume } from '../../hooks/useResume';
import { dataAllResumes } from '../../data';
import React from 'react';

function ResumeShare() {
  const { resumeId } = useParams();
  const { setResume } = useResume();

  React.useEffect(() => {
    if (!resumeId) return;
    async function fetchResume() {
      // TODO: call api - https://react-resume-builder-mc26.vercel.app/api/resumes/get/${resumeId}
      const resume = dataAllResumes.find(resume => resume._id === resumeId);
      if (!resume) return;
      setResume(resume)
    }
    fetchResume();
  }, [resumeId]) 
  
  return (
    <div className="bg-white">
      <ResumePreview  />
    </div>
  )
}

export default ResumeShare
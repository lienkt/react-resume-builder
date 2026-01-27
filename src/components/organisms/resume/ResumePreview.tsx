import type { IResume } from "../../../types/resume"
import ClassicTemplate from "../../templates/resume/ClassicTemplate"
import MinialImageTemplate from "../../templates/resume/MinialImageTemplate"
import MinialTemplate from "../../templates/resume/MinialTemplate"
import ModernTemplate from "../../templates/resume/ModernTemplate"

interface ResumePreviewProps {
  resumeData: IResume
}

function ResumePreview({ resumeData }: ResumePreviewProps ) {

  return (
    <div 
      id="resume-preview"
      className="border border-gray-200 print:shadow-none print:border-none"
    >
      {resumeData.template === 'modern' && <ModernTemplate />}

      {resumeData.template === 'minimal' && <MinialTemplate />}

      {resumeData.template === 'classic' && <ClassicTemplate />}

      {resumeData.template === 'minimal-image' && <MinialImageTemplate />}

    </div>
  )
}

export default ResumePreview
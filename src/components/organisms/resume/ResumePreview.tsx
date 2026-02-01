import { useResume } from "../../../hooks/useResume"
import ClassicTemplate from "../../templates/resume/ClassicTemplate"
import { MinimalImageTemplate } from "../../templates/resume/MinialImageTemplate"
import MinialTemplate from "../../templates/resume/MinialTemplate"
import ModernTemplate from "../../templates/resume/ModernTemplate"

function ResumePreview() {
  const { data } = useResume();
  const template = data.template;
  return (
    <div 
      id="resume-preview"
      className="border border-gray-200 print:shadow-none print:border-none"
    >
      {template === 'modern' && <ModernTemplate />}

      {template === 'minimal' && <MinialTemplate />}

      {template === 'classic' && <ClassicTemplate />}

      {template === 'minimal-image' && <MinimalImageTemplate data={data} accentColor={data.accent_color} />}

    </div>
  )
}

export default ResumePreview

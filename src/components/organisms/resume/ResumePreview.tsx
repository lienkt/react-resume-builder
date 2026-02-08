import { useResume } from "../../../hooks/useResume"
import ClassicTemplate from "../../templates/resume/ClassicTemplate"
import { MinimalImageTemplate } from "../../templates/resume/MinialImageTemplate"
import MinialTemplate from "../../templates/resume/MinialTemplate"
import ModernTemplate from "../../templates/resume/ModernTemplate"

function ResumePreview() {
  const { data } = useResume();
  const template = data.template;

  console.log('data: ', data)
  return (
    <div 
      id="resume-preview"
      className="border border-gray-200 print:shadow-none print:border-none"
    >
      {template === 'modern' && <ModernTemplate />}

      {template === 'minimal' && <MinialTemplate />}

      {template === 'classic' && <ClassicTemplate />}

      {template === 'minimal-image' && <MinimalImageTemplate data={data} accentColor={data.accent_color} />}
      <style>
        {`
          @page {
            size: letter;
            margin: 0;
          }
          @media print {
            html, body {
              width: 8.5in;
              height: 11in;
              overflow: hidden;
            }
            body * {
              visibility: hidden;
            }
            #resume-preview, #resume-preview * {
              visibility: visible;
            }
            #resume-preview {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              height: auto;
              marign:0;
              padding: 0;
              box-shadow: none !important;
              border: none: !important;
            }
          }
        `}
      </style>
    </div>
  )
}

export default ResumePreview

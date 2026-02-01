import React from "react";
import { Link, useParams } from "react-router"
import { dataAllResumes } from "../../data";
import { ArrowLeftIcon, ChevronLeft, ChevronRight } from "lucide-react";
import TemplateSelector from "../../components/organisms/resume/TemplateSelector";
import ColorPicker from "../../components/organisms/resume/ColorPicker";
import PersonalInfo from "../../components/organisms/resume/PersonalInfo";
import ProfessionalSummary from "../../components/organisms/resume/ProfessionalSummary";
import Experience from "../../components/organisms/resume/Experience";
import Education from "../../components/organisms/resume/Education";
import Project from "../../components/organisms/resume/Project";
import Skill from "../../components/organisms/resume/Skill";
import ResumePreview from "../../components/organisms/resume/ResumePreview";
import { useResume } from "../../hooks/useResume";

const sections = [
  { id: 'personal', name: 'Personal Infomation' },
  { id: 'professional_summary', name: 'Professional Summary' },
  { id: 'experience', name: 'Professional Experience' },
  { id: 'education', name: 'Education' },
  { id: 'project', name: 'Projects' },
  { id: 'skill', name: 'Skills' },
]

function ResumeBuilder() {
  const { resumeId } = useParams();
  const { setResume, updateAccentColor } = useResume();
  const [activeSectionIndex, setActiveSectionIndex] = React.useState(0);
  const activeSection = sections[activeSectionIndex]

  React.useEffect(() => {
    if (!resumeId) return;
    async function fetchResume() {
      // TODO: call api - https://react-resume-builder-mc26.vercel.app/api/resumes/get/${resumeId}
      
      const resume = dataAllResumes.find(resume => resume._id === resumeId);
      if (!resume) return;
      // setResumeData(resume)
      setResume(resume)
    }
    fetchResume();
  }, [resumeId]) 

  function _updateAccentColor(value: string) {
    updateAccentColor(value)
  }

  function handlePrevSection() {
    setActiveSectionIndex(prevState => {
      return prevState - 1
    })
  }

  function handleNextSection() {
    setActiveSectionIndex(prevState => {
      if (prevState === sections.length - 1) return prevState;
      return prevState + 1
    })
  }

  return (
    <>
      <Link to="/dashboard" className="inline-flex gap-2 items-center text-slate-500 hover:text-slate-700 transition-all">
        <ArrowLeftIcon className="size-4"/> Back to Dashboard
      </Link>

      <div className="grid lg:grid-cols-12 gap-8">
        <div className="relative lg:col-span-5 rounded-lg">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 pt-1">
            {/* <hr className="absolute top-0 left-0 h-1 bg-gradient-to-r from-green-500 to-green-600 border-none transition-all duration-200" /> */}

            <div className="flex justify-between items-center mb-6 border-b border-gray-300 py-1">
              <div className="flex items-center gap-2">
                <TemplateSelector />

                <ColorPicker />
              </div>

              <div className="flex items-center">
                {activeSectionIndex !== 0 && (
                  <button
                    className={`flex items-center gap-1 p-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all`}
                    onClick={handlePrevSection}
                  >
                    <ChevronLeft className='size-4' /> Previous 
                  </button>
                )}
                
                <button
                  className={`flex items-center gap-1 p-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all ${activeSectionIndex === sections.length - 1 && 'opacity-50 cursor-not-allowed'}`}
                  onClick={handleNextSection}
                >
                  Next <ChevronRight className='size-4' />
                </button>
              </div>
            </div>

            <div className="space-y-6">
              {activeSection.id === 'personal' && (
                <PersonalInfo />
              )}

              {activeSection.id === 'professional_summary' && (
                <ProfessionalSummary />
              )}

              {activeSection.id === 'experience' && (
                <Experience />
              )}

              {activeSection.id === 'education' && (
                <Education />
              )}

              {activeSection.id === 'project' && (
                <Project />
              )}

              {activeSection.id === 'skill' && (
                <Skill />
              )}
            </div>

            <div className="text-right">
              <button 
                className="bg-gradient-to-br from-blue-100 to-blue-200 ring-blue-300 text-blue-600 ring hover:ring-blue-400 transition-all rounded-md px-6 py-2 mt-6 text-sm "
              >
                <div className="flex items-center">Save Changes</div>
              </button>
            </div>
            
          </div>
        </div>

        <div className="lg:col-span-7 max-lg:mt-6">
          <div className="w-full bg-gray-100">
            <ResumePreview  />
          </div>
        </div>
      </div>
    </>
  )
}

export default ResumeBuilder
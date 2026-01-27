import { FilePenLineIcon, FileText, PencilIcon, PlusIcon, TrashIcon, UploadCloudIcon, User } from "lucide-react"
import { useNavigate } from "react-router";

import CreateResumeModal from "../../components/organisms/modal/CreateResumeModal"
import React from "react";
import type { IResume } from "../../types/resume";

// mock data
import { dataAllResumes } from "../../data";

function Dashboard() {
  const navigate = useNavigate();
  const [isOpenCreateResumeModal, setIsOpenCreateResumeModal] = React.useState(false);
  const [allResumes, setAllResumes] = React.useState<IResume[]>([]);

  React.useEffect(() => {
    async function fetchResume() {
      // TODO: api get all resumes - GET https://react-resume-builder-mc26.vercel.app/api/resumes

      setAllResumes(dataAllResumes)
    }
    fetchResume();
  }, [])

  function toggleOpenCreateResumeModal() {
    setIsOpenCreateResumeModal(prevState => !prevState)
  }

  function onSubmitCreateResume(e: React.FormEvent) {
    e.preventDefault();
    console.log('onSubmitCreateResume ')
    // TODO: call api create resumse - POST https://react-resume-builder-mc26.vercel.app/api/resumes/create

    toggleOpenCreateResumeModal();
  }

  function navigateResumeDetail(_id: string) {
    navigate(`/resume-builder/${_id}`)
  }

  function handleDeleteResume(_id: string) {
    console.log('handleDeleteResume: ', _id);

    // TODO: call api delete resume - DELETE https://react-resume-builder-mc26.vercel.app/api/resumes/delete/${_id}
  }

  function handleEditResume(_id: string) {
    console.log('handleEditResume: ', _id);

    // TODO: call api edit resume - PUT https://react-resume-builder-mc26.vercel.app/api/resumes/update
  }
  return (
    <>
      <div className="text-2xl-font-meidum mb-6 bg-gradient-to-r from-slate-600 to-slate-700 bg-clip-text text-transparent sm:hidden">
        Welcome, Lien
      </div>

      <div className="flex gap-4">
        <button 
          className="w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-xl gap-2 text-slate-600. border border-dashed border-slate-300 group hover:border-indigo-500 hover:shadow-lg transition-all cursor-pointer"
          onClick={toggleOpenCreateResumeModal}
        >
          <PlusIcon className="size-11 transition-all duration-300 p-2.5 bg-gradient-to-br from-indigo-300 to-indigo-500 text-white rounded-full" />
          <p className="text-sm group-hover:text-indigo-600 transition-all">Create Resume</p>
        </button>

        <button className="w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-xl gap-2 text-slate-600. border border-dashed border-slate-300 group hover:border-indigo-500 hover:shadow-lg transition-all cursor-pointer">
          <UploadCloudIcon className="size-11 transition-all duration-300 p-2.5 bg-gradient-to-br from-purple-300 to-purple-500 text-white rounded-full" />
          <p className="text-sm group-hover:text-purple-600 transition-all">Upload Existing</p>
        </button>
      </div>

      <hr className="border-slate-300 my-6 sm:w-[305px]" />

      <div className="grid grid-cols-2 sm:flex flex-wrap gap-4">
        {allResumes.map(resume => (
          <button
            className="relative w-full sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 border group hover:shadow-lg transition-all cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 87, 51, 0.063), rgba(255, 87, 51, 0.25))',
              borderColor: 'rgba(255, 87, 51, 0.25)'
            }}
            onClick={() => navigateResumeDetail(resume._id)}
          >
            <FilePenLineIcon className="size-7 group-hover:scale-105 transition-all" style={{ color: 'rgb(255, 87, 51)' }} />
            <p className="text-sm group-hover:scale-105 transition-all px-2 text-center" style={{ color: 'rgb(255, 87, 51)' }}>
              {resume.title}
            </p>
            <p className="absolute bottom-1 text-[11px] text-slate-400 group-hover:text-slate-500 transition-all duration-300 px-2 text-center">
              Updated on {new Date(resume.updatedAt).toLocaleDateString()}
            </p>

            <div 
              className="absolute top-1 right-1 group-hover:flex items-center hidden"
              onClick={e => e.stopPropagation()}
            >
              <TrashIcon 
                className="size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors"
                onClick={() => handleDeleteResume(resume._id)}
              />

              <PencilIcon 
                className="size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors"
                onClick={() => handleEditResume(resume._id)}
              />
            </div>
          </button>
        ))}
      </div>


      {isOpenCreateResumeModal && (
        <CreateResumeModal 
          onCloseModal={toggleOpenCreateResumeModal}
          onSubmitCreateResume={onSubmitCreateResume}
        />
      )}
    </>
  )
}

export default Dashboard
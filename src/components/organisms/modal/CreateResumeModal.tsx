import { XIcon } from "lucide-react"

interface CreateResumeModal {
  onCloseModal: () => void;
  onSubmitCreateResume: (e: React.FormEvent) => void;
}

function CreateResumeModal({ onCloseModal, onSubmitCreateResume }: CreateResumeModal) {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center">
      <div className="relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6">
        <h2 className="text-xl font-bold mb-4">Create a Resume</h2>

        <form onSubmit={onSubmitCreateResume}>
          <input 
            type="text" 
            placeholder="Resume Title" 
            className="w-full px-4 py-2 mb-4 focus:border-green-600 ring-green-600" 
            required 
          />
          <button type="submit" className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
            Create Resume
          </button>
          <XIcon 
            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors" 
            onClick={onCloseModal}
          />
        </form>
      </div>
    </div>
  )
}

export default CreateResumeModal
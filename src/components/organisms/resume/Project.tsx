import { Plus, Trash2 } from "lucide-react"
import TextFieldWithoutLabel from "../../molecules/TextFieldWithoutLabel"

function Project() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold text-gray900">Projects</h3>
          <p className="text-sm text-gray-600">Add your projects</p>
        </div>
        <button className="flex items-center gap-2 px-3 py-1 text-sm bg-green-100 text-green-700 rounded hover:bg-green-200 transition-colors disabled:opacity-50">
          <Plus className="size-4" />
          Add Project
        </button>
      </div>

      <div className="space-y-4 mt-5">
        <div className="p-4 border border-gray-200 rounded-lg space-y-3">
          <div className="flex justify-between items-start">
            <h4>Project #1</h4>
            <button className="text-red-500 hover:text-red-700 transition-colors">
              <Trash2 className="size-4" />
            </button>
          </div>
          <div>
            <TextFieldWithoutLabel 
              required
              placeholder="Project Name"
              className="px-3 py-2 text-sm rounded-lg"
              defaultValue="Team Task Management System"
            />
            
            <TextFieldWithoutLabel 
              required
              placeholder="Project Type"
              className="px-3 py-2 text-sm rounded-lg mt-3"
              defaultValue="Web Application (Productivity Tool)"
            />

            <textarea
              rows={4}
              className="w-full text-sm px-3 py-2 rounded-lg resize-none mt-3"
              placeholder="Describe your project ..."
              defaultValue={
                "TaskTrackr is a collaborative task management system designed for teams to create, assign, track, and manage tasks in real time. "
              }
            />

          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
import { Plus, X } from "lucide-react"

function Skill() {
  return (
    <div>
      <div className="">
        <div>
          <h3 className="text-lg font-semibold text-gray900">Skills</h3>
          <p className="text-sm text-gray-600">Add your technical and soft skills</p>
        </div>
        <div className="flex gap-3 mt-3">
          <input
            placeholder="Enter a skill (e.g., Javascript, Project Management)"
            className="flex-1 px-3 py-2 text-sm"
            type="text"
            defaultValue=""
          />
          <button
            className="flex items-center gap-2 px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Plus className="size-4" />
            Add
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          <span className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
            JavaScript
            <button className="ml-1 hover:bg-blue-200 rounded-full p-0.5 transition-colors">
              <X className="w-3 h-3" />
            </button>
          </span>
          <span className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
            React JS
            <button className="ml-1 hover:bg-blue-200 rounded-full p-0.5 transition-colors">
              <X className="w-3 h-3" />
            </button>
          </span>
        </div>

        <div className="bg-blue-50 p-3 rounded-lg mt-4">
          <p className="text-sm text-blue-800">
            <strong>Tip:</strong> Add 8-12 relevant skills. Include both technical
            skills (programming languages, tools) and soft skills (communication,
            teamwork).
          </p>
        </div>

      </div>
    </div>
  )
}

export default Skill
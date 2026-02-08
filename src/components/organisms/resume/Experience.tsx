import { Plus, Trash2 } from "lucide-react"
import TextFieldWithoutLabel from "../../molecules/TextFieldWithoutLabel"

function Experience() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold text-gray900">Professional Experience</h3>
          <p className="text-sm text-gray-600">Add your job experience</p>
        </div>
        <button className="flex items-center gap-2 px-3 py-1 text-sm bg-green-100 text-green-700 rounded hover:bg-green-200 transition-colors disabled:opacity-50">
          <Plus className="size-4" />
          Add Experience
        </button>
      </div>

      <div className="space-y-4 mt-5">
        <div className="p-4 border border-gray-200 rounded-lg space-y-3">
          <div className="flex justify-between items-start">
            <h4>Experience #1</h4>
            <button className="text-red-500 hover:text-red-700 transition-colors">
              <Trash2 className="size-4" />
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            <TextFieldWithoutLabel 
              required
              placeholder="Company Name"
              className="px-3 py-2 text-sm rounded-lg"
              defaultValue="Example Technologies."
            />
            
            <TextFieldWithoutLabel 
              required
              placeholder="Job Title"
              className="px-3 py-2 text-sm rounded-lg"
              defaultValue="Senior Full Stack Developer"
            />

            <TextFieldWithoutLabel 
              required
              className="px-3 py-2 text-sm rounded-lg"
              defaultValue="2023-05"
              type="month"
            />

            <TextFieldWithoutLabel 
              required
              className="px-3 py-2 text-sm rounded-lg"
              defaultValue="2023-06"
              type="month"
            />
          </div>
          <label className="flex items-center gap-2">
            <input
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              type="checkbox"
            />
            <span className="text-sm text-gray-700">Currently working here</span>
          </label>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">
                Job Description
              </label>
            </div>
            <textarea
              rows={4}
              className="w-full text-sm px-3 py-2 rounded-lg resize-none"
              placeholder="Describe your key responsibilities and achivements ..."
              defaultValue={
                "Architected, developed, and deployed innovative full-stack applications at Example Technologies.\ncreating robust back-end systems and intuitive front- end interfaces to deliver meaningful digital experiences "
              }
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Experience
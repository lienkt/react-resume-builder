import { Plus, Trash2 } from "lucide-react"
import TextFieldWithoutLabel from "../../molecules/TextFieldWithoutLabel"

function Education() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold text-gray900">Education</h3>
          <p className="text-sm text-gray-600">Add your education details</p>
        </div>
        <button className="flex items-center gap-2 px-3 py-1 text-sm bg-green-100 text-green-700 rounded hover:bg-green-200 transition-colors disabled:opacity-50">
          <Plus className="size-4" />
          Add Education
        </button>
      </div>

      <div className="space-y-4 mt-5">
        <div className="p-4 border border-gray-200 rounded-lg space-y-3">
          <div className="flex justify-between items-start">
            <h4>Education #1</h4>
            <button className="text-red-500 hover:text-red-700 transition-colors">
              <Trash2 className="size-4" />
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            <TextFieldWithoutLabel 
              required
              placeholder="Institution Name"
              className="px-3 py-2 text-sm rounded-lg"
              defaultValue="Example Institute of Technology"
            />
            
            <TextFieldWithoutLabel 
              required
              placeholder="Degree (e.g., Bachelor's, Master's)"
              className="px-3 py-2 text-sm rounded-lg"
              defaultValue="B.TECH"
            />

            <TextFieldWithoutLabel 
              required
              placeholder="Field of Study"
              className="px-3 py-2 text-sm rounded-lg"
              defaultValue="CSE"
            />

            <TextFieldWithoutLabel 
              required
              className="px-3 py-2 text-sm rounded-lg"
              defaultValue="2023-06"
              type="month"
            />

            <TextFieldWithoutLabel 
              required
              placeholder="GPA (optional)"
              className="px-3 py-2 text-sm rounded-lg"
              defaultValue="8.7"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
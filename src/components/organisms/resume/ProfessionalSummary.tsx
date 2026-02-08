function ProfessionalSummary() {
  return (
    <div>
      <div>
        <h3 className="text-lg font-semibold text-gray900">Professional Summary</h3>
        <p className="text-sm text-gray-600">Add summary for your resume here</p>
      </div>

      <div className="mt-6">
        <textarea
          rows={7}
          className="w-full p-3 px-4 mt-2 border text-sm border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
          placeholder="Write a compelling professional summary that highlights your key strengths and career objectives..."
          defaultValue={
            "Results-driven Web Developer with 6 years of experience in designing, developing, and implementing innovative web solutions, seeking a challenging role to leverage expertise in front-end and back-end technologies to drive impactful results and contribute to a forward-thinking organization."
          }
        />
        <p className="text-xs text-gray-500 max-w-4/5 mx-auto text-center">
          Tip: Keep it concise (3-4 sentences) and focus on your most relevant skills
          and experiences.
        </p>
      </div>
    </div>
  )
}

export default ProfessionalSummary
class ResumeAiService
  def self.analyse_resume(analysis_params)
    base_url = URI('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyB0oq3dqIYOXdumjDK5kt777BLknBdlVlU')
    reader = PDF::Reader.new(analysis_params[:resume].tempfile)
    resume_data = reader.pages.map(&:text).join('\n')

    prompt = <<~PROMPT
      Analyze the following resume against the job description.
      Provide a score (out of 10), matched skills, gaps, and suggestions for improvement.

      Resume:
      #{resume_data}

      Job Description:
      #{analysis_params[:job_description]}
    PROMPT

    binding.pry

    response = HTTParty.post(
      base_url,
      headers: {
        'Content-Type' => 'application/json'
      },
      body: {
        contents: [
          {
            parts: [
              {
                text: prompt
              }
            ]
          }
        ]
      }.to_json
    )

    return response
  end
end

# AIzaSyB0oq3dqIYOXdumjDK5kt777BLknBdlVlU
# curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=GEMINI_API_KEY" \
#   -H 'Content-Type: application/json' \
#   -X POST \
#   -d '{
#     "contents": [
#       {
#         "parts": [
#           {
#             "text": "Explain how AI works in a few words"
#           }
#         ]
#       }
#     ]
#   }'
class ResumeAiService
  base_url = 'https://api.openai.com/v1/chat/completions'
  response = HTTParty.post(
    base_url,
    headers: {
      'Content-Type' => 'application/json',
      'Authorization' => "Bearer #{ENV['API_TOKEN']}"
    },
    body: {
      model: 'gpt-4o',
      messages: [
        {
          role: 'user',
          content: 'what is rails?'
        }
      ]
    }.to_json
  )

  return response
end

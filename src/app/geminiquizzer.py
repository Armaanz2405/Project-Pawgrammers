import os
import google.generativeai as genai
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Get the API key from the environment
api_key = os.getenv("GEMINI_API_KEY")

if not api_key:
    raise ValueError("GEMINI_API_KEY not found in environment variables.")

# Configure the Gemini API with the key
genai.configure(api_key=api_key)

# Now you can use the model as before
model = genai.GenerativeModel('gemini-2.5-flash')
response = model.generate_content("Tell me a fun fact about the universe.")

print(response.text)
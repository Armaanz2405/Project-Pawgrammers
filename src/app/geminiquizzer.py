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

questions = [
    "How many languages do you know and what languages?",
    "Rate your programming experience from (1-10) Explain.",
    "List the most recent project you've worked on with a brief explanation of the project.",
    "What is your experience with data structures?",
    "Have you ever worked with and implemented APIs? If so, list some.",
    "Please describe to your best ability what a bug is.",
    "How do you approach solving a new coding problem you've never seen before?",
    "Have you ever worked with Git/any other version control system?",
    "Tell a time you've had to debug a program and what you did to solve it.",
    "Have you ever worked with specific workflow methods, how comfortable are you with them?",
    "Have you ever worked with systems programming, what is your experience?",
    "Rate your knowledge in software architecture? (1-10) Explain."
]

conversation_history = []

for i, question in enumerate(questions):
    print(f"\n{i+1}. {question}")
    user_answer = input("Your answer: ")
    conversation_history.append(f"{i+1}. {question}\nAnswer: {user_answer}")

# Join the list of questions and answers into a single string
full_context = "\n\n".join(conversation_history)

# Create the prompt for the model
prompt = f"Given the following quiz responses, rate the user's programming experience on a scale of 1-4. \n\nHere are the questions and answers:\n{full_context}\n\nRating (1=Beginner, 2=Novice, 3=Intermediate, 4=Advanced). Your final response must be the single number corresponding to the rating (1, 2, 3, or 4), with no additional text or explanation."

model = genai.GenerativeModel('gemini-2.5-flash')

response = model.generate_content(prompt)
print("\nYour Experience Level:", response.text)



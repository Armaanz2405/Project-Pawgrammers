import os
from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai
from dotenv import load_dotenv

# ----------------------
# Load environment
# ----------------------
load_dotenv()
api_key = os.getenv("GEMINI_API_KEY")
if not api_key:
    raise ValueError("GEMINI_API_KEY not found in environment variables.")
genai.configure(api_key=api_key)

# ----------------------
# Questions for reference
# ----------------------
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

# ----------------------
# Flask app
# ----------------------
app = Flask(__name__)
CORS(app)

@app.route('/submit-quiz', methods=['POST'])
def submit_quiz():
    data = request.json  # Expecting a list of 12 answers

    # Validate data
    if not data or not isinstance(data, list) or len(data) != 12:
        return jsonify({'status': 'error', 'message': 'Invalid data, expected 12 answers'}), 400

    # Build conversation history for prompt
    conversation_history = []
    for i, answer in enumerate(data):
        conversation_history.append(f"{i+1}. {questions[i]}\nAnswer: {answer}")

    full_context = "\n\n".join(conversation_history)

    # Build prompt for Gemini API
    prompt = (
        f"Given the following quiz responses, rate the user's programming experience on a scale of 1-4.\n\n"
        f"Here are the questions and answers:\n{full_context}\n\n"
        "Rating (1=Beginner, 2=Novice, 3=Intermediate, 4=Advanced). "
        "Your final response must be the single number corresponding to the rating (1, 2, 3, or 4), "
        "with no additional text or explanation."
    )

    # Call Gemini API
    try:
        model = genai.GenerativeModel('gemini-2.5-flash')
        response = model.generate_content(prompt)
        rating = response.text.strip()  # Should be "1", "2", "3", or "4"
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500

    # Map rating to next page
    page_map = {
        '1': 'result-mercury',
        '2': 'result-earth',
        '3': 'result-jupiter',
        '4': 'result-uranus'
    }
    next_page = page_map.get(rating, '/results-mercury')  # default if something goes wrong

    print("Full context:", full_context)
    print("Gemini rating:", rating)
    print("Next page:", next_page)

    return jsonify({
        'status': 'success',
        'rating': rating,
        'next_page': next_page
    })

# ----------------------
# Run server
# ----------------------
if __name__ == '__main__':
    app.run(debug=True)

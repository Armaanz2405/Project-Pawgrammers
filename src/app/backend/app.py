from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/submit-quiz', methods=['POST'])
def submit_quiz():
    data = request.json  # Expecting a JSON object or array
    # Pass the answers to your Python function
    print("Received answers:", data)  # Print to console for testing    return jsonify({'result': result})
    return jsonify({'status': 'success', 'received': data})
if __name__ == '__main__':
    app.run(debug=True)

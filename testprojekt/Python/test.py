import requests
import json

# Your API key
api_key = 'AIzaSyB5kc7TVcw3t5rCMhYIvfRSk2n4G6lvhSM'

# Replace with the correct endpoint URL for PaLM API
endpoint = 'https://us-central1-aiplatform.googleapis.com/v1/projects/YOUR_PROJECT_ID/locations/us-central1/models/YOUR_MODEL_ID:predict'

# Headers for the API request
headers = {
    'Authorization': f'Bearer {api_key}',
    'Content-Type': 'application/json',
}

def make_palm_request(prompt):
    # Data for the API request
    data = {
        "input": {"text": prompt}
    }
    
    # Make the API request
    response = requests.post(endpoint, headers=headers, data=json.dumps(data))
    
    # Check if the request was successful
    if response.status_code == 200:
        print("Response:", response.json())
    else:
        print("Error:", response.status_code, response.text)

# Example usage
make_palm_request("Hello, how are you today?")

import requests

url = 'http://127.0.0.1:5000/predict'
files = {'file': open('/Users/melissaaprilcastro/Downloads/Cardinal.jpg', 'rb')}  # Replace this with the path to an actual test image file

response = requests.post(url, files=files)

print("Status Code:", response.status_code)
print("Response Text:", response.text)
try:
    print("JSON Response:", response.json())
except requests.exceptions.JSONDecodeError:
    print("Failed to decode JSON response")
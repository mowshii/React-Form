from flask import Flask, request, jsonify
from flask_cors import CORS
import psycopg2

app = Flask(__name__)
CORS(app)

conn = psycopg2.connect(
    host="localhost",
    database="postgres",
    user="postgres",
    password="Mowshi",
    port="5432"
)

cur = conn.cursor()

@app.route('/')
def home():
    return "Flask Server Running"

@app.route('/add_student', methods=['POST'])
def add_student():

    data = request.get_json()

    query = """
    INSERT INTO students
    (name, email, phone, age, gender, address,
     city, state, country, department)

    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
    """

    values = (
        data['name'],
        data['email'],
        data['phone'],
        data['age'],
        data['gender'],
        data['address'],
        data['city'],
        data['state'],
        data['country'],
        data['department']
    )

    cur.execute(query, values)
    conn.commit()

    return jsonify({
        "message": "Student Added Successfully"
    })

if __name__ == '__main__':
    app.run(debug=True)
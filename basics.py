from flask import Flask,render_template
import cv2,time
import pickle
import face_recognition
from face_recognition.face_recognition_cli import image_files_in_folder
from flask_mail import Mail, Message

app = Flask(__name__)

mail = Mail(app) # instantiate the mail class
   
# configuration of mail
app.config['MAIL_SERVER']='smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = 'divyayarra11@gmail.com'
app.config['MAIL_PASSWORD'] = 'ESWAR SAI'
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
mail = Mail(app)

@app.route('/')
def home():
    return "hello"

@app.route('/find')
def predict():
    #webcam = cv2.VideoCapture("Videos/ll.mp4")
    webcam = cv2.VideoCapture(0) 
    check=False
    while True:
        rval = False
        while(not rval):
            (rval, frame) = webcam.read()
            if(not rval):
                print("Failed to open webcam. Trying again...")
                
        frame=cv2.flip(frame,1) 
        frame_copy = cv2.resize(frame, (0, 0), fx=0.25, fy=0.25)
        frame_copy=cv2.cvtColor(frame_copy, cv2.COLOR_BGR2RGB)
        predictions = predict(frame_copy, model_path="classifier/trained_knn_model.pkl") 
        font = cv2.FONT_HERSHEY_DUPLEX
        for name, (top, right, bottom, left) in predictions:
            top *= 4 
            right *= 4
            bottom *= 4
            left *= 4
            cv2.rectangle(frame, (left, top), (right, bottom), (0, 255, 255), 2)
            cv2.putText(frame, name, (left-10,top-6), font, 0.8, (255, 255, 255), 1)
            if(name=="divya"):
                check= True
                
            
            
        cv2.imshow('Video', frame)
        
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break
    webcam.release()
    cv2.destroyAllWindows()
    if check:
        msg = Message(
                    'Hello',
                    sender ='divyayarra11@gmail.com',
                    recipients = ['divyayarra0701@gmail.com']
                )
        msg.body = 'Hello Flask message sent from Flask-Mail'
        mail.send(msg)
        return "person found"

    return "person not found"

def predict(img_path, knn_clf=None, model_path=None, threshold=0.6): 
    if knn_clf is None and model_path is None:
        raise Exception("Must supply knn classifier either thourgh knn_clf or model_path")
    if knn_clf is None:
        with open(model_path, 'rb') as f:
            knn_clf = pickle.load(f)
    img = img_path
    face_box = face_recognition.face_locations(img)
    if len(face_box) == 0:
        return []
    faces_encodings = face_recognition.face_encodings(img, known_face_locations=face_box)
    closest_distances = knn_clf.kneighbors(faces_encodings, n_neighbors=2)
    matches = [closest_distances[0][i][0] <= threshold for i in range(len(face_box))]
    return [(pred, loc) if rec else ("unknown", loc) for pred, loc, rec in zip(knn_clf.predict(faces_encodings),face_box,matches
    )]

if __name__ == "__main__":
    app.run(debug=True)
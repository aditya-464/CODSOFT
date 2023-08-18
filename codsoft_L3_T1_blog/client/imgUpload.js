import { API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, SENDER_ID, MEASURE_ID, APP_ID } from "./config.js";

const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: SENDER_ID,
    appId: APP_ID,
    measurementId: MEASURE_ID
};

const app = firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

const inp = document.querySelector(".inp");
const upload = document.querySelector(".upload");
const selectImageBtn = document.querySelector(".selectImage");
const fileData = document.querySelector(".filedata");
let file;
let fileName;
let uploadedFileName;

selectImageBtn.onclick = function () {
    selectImage();
}

const selectImage = () => {
    inp.click();
};

inp.onchange = function (e) {
    getImageData(e);
}

const getImageData = (e) => {
    file = e.target.files[0];
    fileName = Date.now() + "   " + file.name;
    if (fileName) {
        fileData.style.display = "block";
    }
    fileData.innerHTML = fileName;
    console.log(file, fileName);
};


upload.onclick = function () {
    uploadImage();
}

const uploadImage = () => {
    const storageRef = storage.ref().child("profileImages");
    const folderRef = storageRef.child(fileName);
    const uploadtask = folderRef.put(file);
    uploadtask.on(
        "state_changed",
        (snapshot) => {
            console.log("Snapshot", snapshot.ref.name);
            uploadedFileName = snapshot.ref.name;
        },
        (error) => {
            console.log(error);
        },
        () => {
            storage
                .ref("profileImages")
                .child(uploadedFileName)
                .getDownloadURL()
                .then((url) => {
                    console.log("URL", url);
                });
            console.log("File Uploaded Successfully");
        }
    );
};

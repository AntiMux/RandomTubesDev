// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: 'AIzaSyBOR-HQ1kSKPMo0rfUoiU55nMW2pJlzYY0',
    authDomain: 'randomtubes-167720.firebaseapp.com',
    projectId: 'randomtubes-167720'
  });
  
var db = firebase.firestore();

function get_firebase_data(collection_name,document_name){
    let firebase_doc = db.collection(collection_name).doc(document_name);
    firebase_doc.get().then(function(doc){
        console.log(doc.data());
    })
};


function set_firebase_data_all(){
    let array = get_all_ids_and_names()
    let to_update = {};
    console.log(array)
    for (video in array){
        to_update[array[video]["id"]] = array[video]["name"];
    }
    db.collection("all").doc("all").set(to_update,{merge:true})
};

function getsomething(){
    let array = get_all_ids_and_names()
    let to_update = {};
    console.log(array)
    for (video in array){
        to_update[array[video]["id"]] = array[video]["name"];
    }
    console.log(to_update)
};

set_firebase_data_all()

// get_firebase_data("music","all")
// set_firebase_data("all","all","dzwWymbIqMQ")
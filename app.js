
const btn = document.querySelector ('.contaner button');
var showText =document.querySelector ('.contaner p');   
var videoLink = document.getElementById("theVideo");



const apiKey = "AIzaSyCB-ju7msA92oEwsNiwbbqlKPtAVi_khF0";
var random;





function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    document.cookie = "random ="+result;
    return result;
 }


function api_url(){
    let url='https://www.googleapis.com/youtube/v3/search?key='+apiKey+'&maxResults=50&part=snippet&type=video&q='+makeid(4);
    return url;
};

const api_json = () => {
    var value = $.getJSON({
        url: api_url(),
        async: false

    }).responseText;
    return JSON.parse(value);
};

function get_all_videos_data(){
    let array = [];
    let array_clean = [];
    let json = api_json().items;
    for (video in json){
        array.push(json[video]);
    }
    return array;
};

function get_all_ids_and_names(){
    let array = [];
    let json = api_json().items;

    for (video in json){
        array.push({
            id: json[video]["id"]["videoId"],
            name: json[video]["snippet"]["title"]
        })
    }

    return array;
};

function get_all_ids(){
    let array = [];
    let array_clean = [];
    let json = api_json().items;
    for (video in json){
        array.push(json[video]["id"]["videoId"]);
    }
    return array;
};

const addText = () => {
    btn.addEventListener ('click', function() {
        videoLink.src ="https://www.youtube.com/embed/"+ getVideoId()+"?&autoplay=1";
        console.log(splitCookieToArray());
    });
};

addText();
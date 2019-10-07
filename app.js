
const btn = document.querySelector ('.contaner button');
var showText =document.querySelector ('.contaner p');   
var videoLink = document.getElementById("theVideo");

const apiKey = "AIzaSyCt6BCr5SN07CLxm83e5TfX1O06ccbPlI8";


function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }


function api_url(){
    let url='https://www.googleapis.com/youtube/v3/search?key='+apiKey+'&maxResults=50&part=snippet&type=video&q='+makeid(4);
    return url;

};



// const api_json = async () => {
//     const response = await fetch(api_url());
//     const json = await response.json();
//     return json;

// };



const api_json = () => {
    var value = $.getJSON({
        url: api_url(),
        async: false

    }).responseText;
    return JSON.parse(value);
};

// function str_json(){
//     let data = JSON.stringify(api_json());
//     return data;

// };

function get_all_ids(){
    let array = [];
    let json = api_json().items;
    for (video in json){
        array.push(json[video]["id"]["videoId"]);
    }
        
    return array;
}

//let data = api_json();

//console.log(data.items[0])


const addText = () => {
    btn.addEventListener ('click', function() {
        videoLink.src ="https://www.youtube.com/embed/"+ getVideoId();
        console.log(splitCookieToArray());
    });
};

addText();
function update_local_storage(number){
    let local_data = JSON.parse(localStorage.getItem("random_videos"));
    if(local_data == null){
        get_random_videos(number);
    }
    else if(Object.entries(local_data).length <= 1){
        get_random_videos(number);
    }
}


function getFirstItemFromLS() {
    let lSData = JSON.parse(localStorage.getItem("random_videos"));
    let first =lSData[0];
    return first;
    // let key = Object.keys(first)[0];
    // let value = first[key];
}

function removeFirstItemFromLS() {
    let first = getFirstItemFromLS();
    let lSData = JSON.parse(localStorage.getItem("random_videos"));
    lSData.shift();
    localStorage.setItem('random_videos', JSON.stringify(lSData));

}
function updateVideoAndTitle() {
    update_local_storage(50);
    let video = getFirstItemFromLS();
    let key = Object.keys(video)[0];
    let value = video[key];
    videoLink.src ="https://www.youtube.com/embed/"+ key+"?&autoplay=1";
    videoTitle.textContent = value;
    removeFirstItemFromLS()
}

function start_random(){
    // videoLink.src ="https://www.youtube.com/embed/"+ getVideoId()+"?&autoplay=1";
    updateVideoAndTitle();
}

var link = getParameterByName('link');
if(link == null){
    start_random();
}
else{
    videoLink.src ="https://www.youtube.com/embed/"+ link+"?&autoplay=1";
}


update_local_storage(50);
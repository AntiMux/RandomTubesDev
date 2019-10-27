if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    console.log('hello');

    function addVideoToDom() {

        // adding elements to the dom
        let videoContainer = document.querySelector('.video');
        let videoDiv = document.createElement('div');
        let titltAndShareDiv = document.createElement('div');
        let videoElemnt = document.createElement('iframe');
        let videoTitleElemnt = document.createElement('h2');
        let shareDiv = document.createElement('div');
        let spanIcon = document.createElement('span');
        let shareLink = document.createElement('input');

        // adding classes names:
        videoDiv.className = 'video new';
        // videoDiv.id = "new";
        titltAndShareDiv.className = 'titltAndShare'
        videoElemnt.className = 'theVideo';
        videoTitleElemnt.className = 'videoTitle';
        shareDiv.className = 'share';
        spanIcon.className = 'shareIcon';
        shareLink.className = 'shareLink';


        //video
        videoElemnt.setAttribute("src", "");

        //title
        videoTitleElemnt.textContent = "";

        // share
        const icon = "<i class='fas fa-share-alt' >";
        spanIcon.innerHTML = icon;

        //adding to HTML
        videoDiv.append(videoElemnt);
        videoDiv.append(titltAndShareDiv);
        titltAndShareDiv.append(videoTitleElemnt);
        shareDiv.append(spanIcon);
        shareDiv.append(shareLink);
        videoDiv.append(shareDiv);
        titltAndShareDiv.append(shareDiv);
        videoContainer.append(videoDiv);

        // get data from LS
        update_local_storage(videos_number);
        let video = getFirstItemFromLS();
        let key = Object.keys(video)[0];
        let value = video[key];
        let clean_value = value.replace(/&#39;/g, "'")
        let final_value = clean_value.replace(/&quot;/g, "\"")
        videoElemnt.src = "https://www.youtube.com/embed/" + key + "?&autoplay=1";
        videoTitleElemnt.textContent = final_value;
        localStorage.setItem('current_video', JSON.stringify(key));
        shareLink.value = "http://randomtubes.net?link=" + key;
        removeFirstItemFromLS()

    }

    function addMultipleVideos(num) {
        for (let i = 0; i < num; i++) {
            addVideoToDom();
        }
    };

    addMultipleVideos(4);

    function removeVideo() {
        document.querySelectorAll('.new').forEach(el => el.remove());

    }
};
$(document).ready(function(){
    const $mypageProfileImg = $("#mypage-profile-img");
    const $mypageProfileNickname = $("#profile-user-nickname");


    const $mypageProfileIntrotext = $("#profile-content-detail-text-intro dd");

    // let type = $("select[name=type]").val();
    // let keyword = $("input[name=keyword]").val();
    let textImg = "";
    let textNickname = "";

    let textIntro = "";

    console.log("----------");
    console.log(memberId);
    console.log(myId);
    console.log("----------22");

    textNickname += `
        <div id="profile-user-nickname" class="profile-user-nickname">${myId.userNickname}</div>
    `

    if(myId.userIntro != null) {
        textIntro += `
            <dd>${myId.userIntro}</dd>
        `
    } else {
        textIntro += `
            <dd>한 줄 소개</dd>
        `
    }


    if(myId.files.length != 0){
        myId.files.forEach(file => {
            console.log(file);
            if(file.profileType == "REPRESENTATIVE"){
                console.log("if문 들어옴");
                textImg += `
                    <img class="profile-img" src="/profile-files/display?fileName=${file.profilePath}/t_${file.profileUuid}_${file.profileName}">
                `
            }
        })
    } else {
        textImg += `
            <img class="profile-img" src="https://image.ohou.se/i/bucketplace-v2-development/uploads/default_images/avatar.png?gif=1&amp;w=144&amp;h=144&amp;c=c&amp;webp=1">
        `
    }





    $mypageProfileIntrotext.html(textIntro);
    $mypageProfileImg.append(textImg);
    $mypageProfileNickname.html(textNickname);
});




$(document).ready(function(){
    const $mypageProfileImg = $("#mypage-profile-img");
    const $mypageProfileId = $("#mypage-profile-id");

    // let type = $("select[name=type]").val();
    // let keyword = $("input[name=keyword]").val();
    let textImg = "";
    let textId = "";

    console.log("----------");
    console.log(memberId);
    console.log(myId);
    console.log("myId");
    console.log("----------22");

    textId += `
        <div id="mypage-profile-id" class="mypage-profile-id">${myId.userName}</div>
    `
    // textImg += `
    //
    //     <img class="mypage-profile-img1" src="https://image.ohou.se/i/bucketplace-v2-development/uploads/default_images/avatar.png?gif=1&amp;w=144&amp;h=144&amp;c=c&amp;webp=1">
    // `
    console.log(myId.files);
    console.log("myId.files");

    console.log(myId.files.length);
    console.log("myId.files.length");

    console.log(myId.files.profileType);
    console.log("myId.files.profileType");

    // if(myId.files.profileType == "REPRESENTATIVE"){
    //     console.log("if문 들어옴");
    //     textImg += `
    //     <img class="mypage-profile-img1" src="/profile-files/display?fileName=${myId.profilePath}/t_${myId.profileUuid}_${myId.profileName}">
    //     `
    //     // text += `<img src="/profile-files/display?fileName=${myId.filePath}/t_${myId.fileUuid}_${myId.fileName}" class="preview">`;
    //     // text += `<img src="/profile-files/display?fileName=${myId.profilePath}/t_${myId.profileUuid}_${myId.profileName}" class="preview">`;
    // }




    if(myId.files.length != 0){
        myId.files.forEach(file => {
            console.log(file);
            if(file.profileType == "REPRESENTATIVE"){
                console.log("if문 들어옴");
                textImg += `
                    <img class="mypage-profile-img1" src="/profile-files/display?fileName=${file.profilePath}/t_${file.profileUuid}_${file.profileName}">
                `
            }
        })
    } else {
        textImg += `
            <img class="mypage-profile-img1" src="https://image.ohou.se/i/bucketplace-v2-development/uploads/default_images/avatar.png?gif=1&amp;w=144&amp;h=144&amp;c=c&amp;webp=1">
        `
    }



    //  완성작
    // myId.files.forEach(file => {
    //     console.log(file);
    //     if(file.profileType == "REPRESENTATIVE"){
    //         console.log("if문 들어옴");
    //         textImg += `
    //     <img class="mypage-profile-img1" src="/profile-files/display?fileName=${file.profilePath}/t_${file.profileUuid}_${file.profileName}">
    //     `
    //     }
    // })


    // post.files.forEach(file => {
    //     if(file.fileType == "REPRESENTATIVE"){
    //         text += `<img src="/files/display?fileName=${file.filePath}/t_${file.fileUuid}_${file.fileName}" class="preview">`;
    //     }
    // })

    console.log("mypage.js");
    console.log(textImg);

    $mypageProfileImg.append(textImg);
    $mypageProfileId.html(textId);
});









//
// $(document).ready(function(){
//     const $mypageProfileImg = $("#mypage-profile-img");
//     const $mypageProfileId = $("#mypage-profile-id");
//
//     let type = $("select[name=type]").val();
//     let keyword = $("input[name=keyword]").val();
//     let textImg = "";
//     let textId = "";
//     posts.forEach(post => {
//         text += `
//             <li>
//                 <div>
//                     <a href="/post/read?id=${post.id}&type=${type}&keyword=${keyword}">
//                         <h1>${post.id}</h1>
//                         <section class="content-container">
//                             <div class="profile">
//                                 <div><img src="/images/profile.png" width="15px"></div>
//                                 <h6 class="writer">${post.memberName}</h6>
//                             </div>
//                             <h4 class="title">${post.postTitle}</h4>
//                             <h6 clss="post-info">
//                                 <span class="read-count">조회 ${post.postReadCount}</span>
//                                 <span>·</span>
//                                 <span class="date">${elapsedTime(post.postRegisterDate)}</span>
//                             </h6>
//                         </section>
//         `
//         // post.files.forEach(file => {
//
//         //     if(file.fileType == "REPRESENTATIVE"){
//         //         text += `<img src="/files/display?fileName=${file.filePath}/t_${file.fileUuid}_${file.fileName}" class="preview">`;
//         //     }
//         // })
//
//         text += `
//                     </a>
//                 </div>
//             </li>
//         `
//     });
//
//     $mypageProfileImg.append(textImg);
//     $mypageProfileId.html(textId);
// });
//

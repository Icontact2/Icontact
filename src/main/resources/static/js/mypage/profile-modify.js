

//
// function send(){
//     /*비밀번호 암호화(인코딩)*/
//     $("input[id='confirmPassword']").val(btoa($("input[id='confirmPassword']").val()));
//
//     /*이메일 합치기*/
//     $("input[name='userEmail']").val($("input[name='email-first']").val() + '@' + $("select[id='email-select']").val())
//
//     document.join.submit();
// }
//
// /*------------------------------------------------------------------------*/
// // 이메일 직접 입력 선택시 select 태그가 input 태그로 바꾸는 기능
//
// // select 태그와 input 태그를 생성할 컨테이너 요소를 가져오기
// const select = document.getElementById('email-select');
// const arrowBtn = document.querySelector('.email-input2_expand');
// const inputContainer = document.getElementById('change');
//
// // select 태그를 input 태그로 대체하는 함수를 정의
// function convertToInput() {
//     // 선택한 option의 값을 가져오기
//     const selectedOption = select.value;
//     if (selectedOption === 'manual') { // '직접입력' 선택시
//         // input 태그를 생성하고 설정
//         const input = document.createElement('input');
//         input.type = 'text';
//         input.classList.add('form-control');
//         // input.value = selectedOption;
//
//         // 이전의 select 태그를 숨기기
//         select.style.display = 'none';
//
//         // 확장 버튼(arrow)을 숨기기
//         arrowBtn.style.display = 'none';
//
//         // input 태그를 컨테이너에 추가
//         inputContainer.appendChild(input);
//     }
// }
//
// // select 태그의 변경 이벤트에 convertToInput 함수를 연결
// select.addEventListener('change', convertToInput);
//
//
//
// /*--------------------------------------------------------------*/
// document.querySelector('.email-check-button').addEventListener('click', function() {
//     $("input[name='userEmail']").val($("input[name='email-first']").val() + '@' + $("select[id='email-select']").val());
//
//     // 이메일 입력 필드에서 값을 가져옴
//     const emailValue = $("input[name='userEmail']").val();
//
//     $.ajax({
//         url: `/user/check-email?userEmail=${emailValue}`,
//         success: function(result){
//             if(result) {
//                 alert('이미 사용 중인 이메일입니다.');
//             } else {
//                 alert('사용 가능한 이메일입니다!');
//                 $(".email-form .form-control").css('border-color', '#eacaff');
//             }
//         },
//         error: function(jqXHR, textStatus, errorThrown) {
//             console.error("AJAX 오류:", textStatus, errorThrown);
//             alert('오류가 발생했습니다. 다시 시도해 주세요.');
//         }
//     });
// });
//
//
// const emailFirstInput = document.querySelector('input[name="email-first"]');
// const emailLastSelect = document.getElementById('email-select');
// const checkEmailButton = document.querySelector('.email-check-button');
//
// // 이메일 입력 상태를 검사하고 버튼을 활성화/비활성화하는 함수
// function checkEmailInputs() {
//     // 이메일의 앞부분과 선택한 도메인을 검사
//     const isEmailFirstValid = emailFirstInput.value.trim() !== '';
//     const isEmailLastValid = emailLastSelect.value !== '' && emailLastSelect.value !== 'manual';
//
//     // 두 조건 모두 만족하면 버튼을 활성화하고, 그렇지 않으면 비활성화
//     checkEmailButton.disabled = !(isEmailFirstValid && isEmailLastValid);
// }
//
// // 이메일 입력 상태가 변경될 때마다 검사 함수를 호출
// emailFirstInput.addEventListener('input', checkEmailInputs);
// emailLastSelect.addEventListener('change', checkEmailInputs);
//
// // 페이지 로드 시 초기 상태를 설정
// checkEmailInputs();
//
// /*-------------------------------------------------------*/
//
//
// $(document).ready(function () {
//     let isPasswordValid = false;
//     let isPasswordsMatch = false;
//     const joinButton = $('.join-button');
//
//     function updateButtonState() {
//         if (isPasswordValid && isPasswordsMatch && !joinButton.prop('disabled')) {
//             joinButton.removeAttr('disabled');
//             joinButton.removeClass('disabled');
//         } else {
//             joinButton.attr('disabled', 'disabled');
//             joinButton.addClass('disabled');
//         }
//     }
//
//     let isAlertShown = false;
//
//     $('#password').on('blur', function () {
//         let passwordValue = $(this).val();
//         let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
//
//         if (!regex.test(passwordValue) && !isAlertShown) {
//             isAlertShown = true;
//             $("#password").css('border-color', 'indianred');
//             alert("비밀번호는 영문, 숫자를 포함한 8자 이상이어야 합니다.");
//             setTimeout(() => {
//                 isAlertShown = false;
//             }, 10);
//             isPasswordValid = false;
//         } else {
//             $("#password").css('border-color', '#eacaff');
//             isPasswordValid = true;
//         }
//         updateButtonState();
//     });
//
//     $('#confirmPassword').on('blur', function () {
//         const passwordValue = $('#password').val();
//         const confirmPasswordValue = $(this).val();
//         let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
//
//         if (regex.test(passwordValue) && confirmPasswordValue) {
//             if (passwordValue !== confirmPasswordValue && !isAlertShown) {
//                 isAlertShown = true;
//                 alert("비밀번호가 일치하지 않습니다.");
//                 $("#confirmPassword").css('border-color', 'indianred');
//                 setTimeout(() => {
//                     isAlertShown = false;
//                 }, 10);
//                 isPasswordsMatch = false;
//             } else {
//                 $("#confirmPassword").css('border-color', '#eacaff');
//                 isPasswordsMatch = true;
//             }
//         }
//         updateButtonState();
//     });
//
//
//
//     // 이전 코드에서는 전체 동의 체크박스에 이벤트를 연결
//     // 해당 이벤트도 `updateButtonState`를 호출하도록 수정
//     $('.conditions .form-radio-label:first-child input[name="connect"]').change(function() {
//         updateButtonState();
//     });
// });
//
// /*-----------------------------------------------------------------*/
//
// $(document).ready(function() {
//     let isAlertShown2 = false;
//
//     $('input[id="phone"]').on('blur', function() {
//         let phoneValue = $(this).val().replace(/-/g, '');  // '-' 문자 제거
//         let regex = /^01(?:0|1|[6-9])\d{7,8}$/;  // 정규식 업데이트
//
//         if (!regex.test(phoneValue) && !isAlertShown2) {
//             isAlertShown2 = true;
//             alert("올바른 전화번호를 입력해주세요.");
//             $(this).css('border-color', 'indianred');
//             setTimeout(() => {
//                 isAlertShown2 = false;
//             }, 10);
//         } else {
//             // 전화번호 형식에 따라 '-' 삽입
//             if(phoneValue.length === 10) {
//                 phoneValue = phoneValue.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
//             } else {
//                 phoneValue = phoneValue.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
//             }
//             $(this).val(phoneValue);  // 변경된 값을 입력칸에 반영
//             $(this).css('border-color', '#eacaff');
//         }
//     });
//
//     // 특수문자 입력 방지
//     $('input[id="phone"]').on('keypress', function(event) {
//         var specialChars = "`~!@#$%^&*()+={}[]|;:'\",.<>?/";
//         if (specialChars.indexOf(String.fromCharCode(event.which)) !== -1) {
//             return false;  // 특수문자를 입력하려 할 때 입력을 차단
//         }
//     });
// });
//
//
//
// /*--------------------------------------------------------------------*/
//
// $(document).ready(function() {
//     let isAlertShown3 = false;
//
//     $('input[id="name"]').on('blur', function() {
//         let nameValue = $(this).val();
//         // 한글 이름을 위한 정규식: 2~5자의 한글만 허용
//         let regex = /^[가-힣]{2,5}$/;
//
//         if (!regex.test(nameValue) && !isAlertShown3) {
//             isAlertShown3 = true;
//             alert("올바른 한글 이름을 입력해주세요.");
//             $(this).css('border-color', 'indianred');
//             setTimeout(() => {
//                 isAlertShown3 = false;
//             }, 10);
//         } else {
//             $(this).css('border-color', '#eacaff');
//         }
//     });
// });
//
// /*--------------------------------------------------------------------------*/
// $(document).ready(function() {
//     let isAlertShown4 = false;
//
//     // 처음 로딩 시 닉네임 체크 버튼을 비활성화
//     $('.nickname-check-button').attr('disabled', true);
//
//     // 닉네임 유효성 검사
//     $('input[id="nickname"]').on('blur', function() {
//         let nicknameValue = $(this).val();
//         // 2~15자의 닉네임
//         let regex = /^.{2,15}$/;
//
//         if (!regex.test(nicknameValue) && !isAlertShown4) {
//             isAlertShown4 = true;
//             alert("닉네임은 2~15자로 입력해주세요.");
//             $(this).css('border-color', 'indianred');
//             $('.nickname-check-button').attr('disabled', true);
//             setTimeout(() => {
//                 isAlertShown4 = false;
//             }, 10);
//         } else {
//             // 유효성 검사를 통과하면 버튼을 활성화
//             $('.nickname-check-button').attr('disabled', false);
//         }
//     });
//
//     // 닉네임 중복 확인 버튼 클릭
//     $('.nickname-check-button').on('click', function() {
//         const nicknameValue = $('input[id="nickname"]').val();
//
//         $.ajax({
//             url: '/user/check-nickname',
//             type: 'GET',
//             data: {
//                 userNickname: nicknameValue
//             },
//             success: function(isDuplicated) {
//                 if (isDuplicated) {
//                     alert("이미 사용중인 닉네임입니다.");
//                     $('input[id="nickname"]').css('border-color', 'indianred');
//                     $('.nickname-check-button').attr('disabled', true);
//                 } else {
//                     alert("사용 가능한 닉네임입니다.");
//                     $('input[id="nickname"]').css('border-color', '#eacaff');
//                     $('.nickname-check-button').attr('disabled', false);
//                 }
//             },
//             error: function(err) {
//                 console.error(err);
//             }
//         });
//     });
// });



//======================================================

// $(document).ready(function() {
//     $profileFile = $(".profileFile");
//     // $userVO = $(`th:object="${userVO}"`);
//
//     console.log($profileFile);
//
//     let textIn = ``;
//
//     console.log($profileFile);
//     // console.log($userVO);
//
//     if(true) {
//         textIn += `
//                 <div class="image-single-input-wrap">
//                                         <ul class="image-single-input">
//                                             <li class="image-single-input_entry">
//                                                 <label for="upload" type="button" class=" attach" style="width: 200px;height: 200px;">
//                                                     <div class="plus-btn">
//                                                         <span class="plus"></span>
//                                                     </div>
//                                                     <div class="preview-layout">
//                                                         <img src="" class="thumbnail representative">
//                                                         <div class="x">
//                                                             <img src="/images/icon/x.svg" width="100%" height="100%">
//                                                         </div>
//                                                     </div>
//
//                                                 </label>
//                                                 <input type="file" id="upload" class="upload" style="display: none;">
// <!--                                                <div class="preview-layout">-->
// <!--                                                    <img src="" class="thumbnail representative">-->
// <!--                                                    <div class="x preview-layout">-->
// <!--                                                        <img src="/images/icon/x.svg" width="100%" height="100%">-->
// <!--                                                    </div>-->
// <!--                                                </div>-->
//
//                                             </li>
//                                         </ul>
//                                     </div>
//             `
//     }
//     console.log(textIn);
//     console.log($profileFile);
//
//     $profileFile.append(textIn);
// });

//======================================================

/*  프로필 사진 첨부용  */

const $upload = $("input.upload");
const $thumbnail = $("label.attach img.thumbnail");

let sizes = new Array(4).fill(0);
$upload.on("change", function(e){
    console.log("제발제발")

    let i = $upload.index($(this));
    let files = $(this)[0].files;
    let name = files[0].name;
    let formData = new FormData();

    sizes[i] = files[0].size;
    console.log(files);
    $(files).each((i, file) => {
        formData.append("uploadFile", file);
        console.log(file + ".......");
    });

    $.ajax({
        url: "/profile-files/upload",
        type: "post",
        data: formData,
        contentType: false,
        processData: false,
        success: function(uuids){
            // $("label.attach").eq(i).find("h6").hide();
            $("label.attach").eq(i).find('.plus-btn').hide();
            // $("div.x").eq(i).show();
            $("div.preview-layout").eq(i).show();
            $("img.thumbnail").eq(i).show();

            let now = new Date();
            let year = now.getFullYear();
            let month = now.getMonth() + 1;
            let date = now.getDate();

            month = month < 10 ? "0" + month : month;
            date = date < 10 ? "0" + date : date;

            let fileName = year + "/" + month + "/" + date + "/t_" + uuids[0] + "_" + name;
            $("img.thumbnail").eq(i).attr("src", `/profile-files/display?fileName=${fileName}`);
        }
    });


    // console.log($(this).files[0]);

    // var reader = new FileReader();
    // reader.readAsDataURL(e.target.files[0]);
    // reader.onload = function(e){
    //     let url = e.target.result;
    //     if(url.includes('image')){
    //         $("label.attach").eq(i).find("h6").hide();
    //         $("div.x").eq(i).show();
    //         $thumbnail.eq(i).show();
    //         $thumbnail.eq(i).attr('src', url);
    //     }else{
    //         showWarnModal("이미지 파일만 등록 가능합니다.");
    //     }
    // }


});

let nicknameVal = $('input[id="nickname"]').val();
console.log("nicknameVal");
console.log(nicknameVal);
console.log("nicknameVal");


$(document).ready(function() {
    let isAlertShown4 = false;

    $nicknameInfo = $("#nicknameInfo");

    console.log($nicknameInfo);

    let textInfo = ``;

    // // 처음 로딩 시 닉네임 체크 버튼을 비활성화
    // $('.nickname-check-button').attr('disabled', true);

    // 닉네임 유효성 검사
    $('input[id="nickname"]').on('blur', function() {
        let nicknameValue = $(this).val();
        console.log("nicknameVal2");
        console.log(nicknameVal);
        console.log("nicknameVal2");

        // 2~15자의 닉네임
        let regex = /^.{2,15}$/;

        if (!regex.test(nicknameValue) && !isAlertShown4) {
            isAlertShown4 = true;
            alert("닉네임은 2~15자로 입력해주세요.");
            $(this).css('border-color', 'indianred');
            // $('.nickname-check-button').attr('disabled', true);
            setTimeout(() => {
                isAlertShown4 = false;
            }, 10);
        } else {
            // 유효성 검사를 통과하면 버튼을 활성화
            // $('.nickname-check-button').attr('disabled', false);
        }
    });

    // 닉네임 중복 확인 버튼 클릭
    $('input[id="nickname"]').on('change', function() {
        const nicknameValue = $('input[id="nickname"]').val();


        console.log("nicknameVal3");
        console.log(nicknameVal);
        console.log("nicknameVal3");

        $.ajax({
            url: '/user/check-nickname',
            type: 'GET',
            data: {
                userNickname: nicknameValue
            },
            success: function(isDuplicated) {
                let textInfo = `<div id="nicknameInfo" class="edit-user-info_form-item_field_warning">다른 유저와 겹치지 않도록 입력해주세요. (2~15자)</div>`;
                if (isDuplicated) {
                    // alert("이미 사용중인 닉네임입니다.");
                    $('input[id="nickname"]').css('border-color', 'indianred');

                    textInfo = `
                        <div id="nicknameInfo" class="edit-user-info_form-item_field_warning" style="color: indianred">이미 사용중인 닉네임입니다.</div>
                    `
                    // $nicknameInfo.html(textInfo);
                    // $('.nickname-check-button').attr('disabled', true);
                } else {

                    // alert("사용 가능한 닉네임입니다.");
                    $('input[id="nickname"]').css('border-color', '#eacaff');
                    textInfo = `
                        <div id="nicknameInfo" class="edit-user-info_form-item_field_warning" style="color: #eacaff">사용 가능한 닉네임입니다!</div>
                    `
                    // $nicknameInfo.html(textInfo);
                    //  <div id="nicknameInfo" class="edit-user-info_form-item_field_warning">다른 유저와 겹치지 않도록 입력해주세요. (2~15자)</div>
                    // $('.nickname-check-button').attr('disabled', false);
                }
                $nicknameInfo.html(textInfo);
            },
            error: function(err) {
                console.error(err);
            }
        });
    });

    // // 닉네임 중복 확인 버튼 클릭
    // $("button.ok-button").on('click', function() {
    //     const nicknameValue = $('input[id="nickname"]').val();
    //
    //     console.log("nicknameVal3");
    //     console.log(nicknameVal);
    //     console.log("nicknameVal3");
    //
    //     $.ajax({
    //         url: '/user/check-nickname',
    //         type: 'GET',
    //         data: {
    //             userNickname: nicknameValue
    //         },
    //         success: function(isDuplicated) {
    //             if (isDuplicated) {
    //                 alert("이미 사용중인 닉네임입니다.");
    //                 $('input[id="nickname"]').css('border-color', 'indianred');
    //                 // $('.nickname-check-button').attr('disabled', true);
    //             } else {
    //                 alert("사용 가능한 닉네임입니다.");
    //                 $('input[id="nickname"]').css('border-color', '#eacaff');
    //                 // $('.nickname-check-button').attr('disabled', false);
    //             }
    //         },
    //         error: function(err) {
    //             console.error(err);
    //         }
    //     });
    // });

});






















$("div.x").on("click", function(e){
    e.preventDefault();
    let i = $("div.x").index($(this));
    sizes = sizes.splice(i, 1);
    $upload.eq(i).val("");
    // $("label.attach").eq(i).find("h6").show();
    $("label.attach").eq(i).find('.plus-btn').show();
    // $("div.x").eq(i).hide();
    $("div.preview-layout").eq(i).hide();
    $thumbnail.eq(i).attr('src', "");
    $thumbnail.eq(i).hide();
});

$("button.ok-button").on("click", function(){
    let text = ``;
    let count = 0;
    $("img.thumbnail").each((i, img) => {
        let fullPath = $(img).attr("src");
        if(!fullPath) {return;}
        // alert(i + '으악' + fullPath);

        let datas = fullPath.split("_");
        let profilePath = datas[0].split("=")[1].replace("/t", "");
        let profileUuid = datas[1];
        let profileName = datas[2];
        let profileType = $(img).hasClass("representative");
        let profileSize = sizes[i];

        text += `
            <input type="hidden" name="files[${count}].profilePath" value="${profilePath}">
            <input type="hidden" name="files[${count}].profileUuid" value="${profileUuid}">
            <input type="hidden" name="files[${count}].profileName" value="${profileName}">
            <input type="hidden" name="files[${count}].profileSize" value="${profileSize}">
        `
        // text += `
        //     <input type="hidden" name="files[${count}].filePath" value="${filePath}">
        //     <input type="hidden" name="files[${count}].fileUuid" value="${fileUuid}">
        //     <input type="hidden" name="files[${count}].fileName" value="${fileName}">
        //     <input type="hidden" name="files[${count}].fileSize" value="${fileSize}">
        // `

        if(profileType){
            text += `<input type="hidden" name="files[${count}].profileType" value="REPRESENTATIVE">`;
        }
        count++;
    });

    console.log("~~~~~~~");
    console.log(text);
    console.log(modifyForm);
    console.log("~~~~~~~");
    console.log("~~~~~~~");
    console.log($(modifyForm));
    console.log("~~~~~~~");
    console.log("~~~~~~~");
    console.log("~~~~~~~");


    $(modifyForm).append(text);
    $(modifyForm).submit();
});














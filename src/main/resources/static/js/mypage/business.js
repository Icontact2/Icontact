
document.addEventListener('DOMContentLoaded', function () {
    const requiredCheckboxes = document.querySelectorAll('#sales-form-private-policy-agree-check');
    const joinButton = document.querySelector('.join-button');

    function updateJoinButton() {
        if ([...requiredCheckboxes].every(checkbox => checkbox.checked)) {
            joinButton.removeAttribute('disabled');
        } else {
            joinButton.setAttribute('disabled', 'disabled');
        }
    }


    // 필수 항목 체크박스 상태 변화 감지
    requiredCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateJoinButton);
    });

    // 페이지 로딩 시 초기 상태 설정
    updateJoinButton();
});




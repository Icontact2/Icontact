package com.app.icontact.service;

import com.app.icontact.domain.UserVO;

import java.util.Optional;

public interface UserService {

//        회원 가입
    public void join(UserVO userVO);

//    로그인
    public Optional<String> login(UserVO userVO);

//    이메일 중복 검사
    public Optional<String> checkEmail(String userEmail);

    //    닉네임 중복 검사
    public Optional<String> checkNickname(String userNickname);

//    비밀번호 변경
    public void changePassword(String userEmail, String userPassword);

    //    회원 조회
    public Optional<UserVO> getUser(Long id);
}

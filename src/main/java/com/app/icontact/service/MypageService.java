package com.app.icontact.service;

import com.app.icontact.DTO.BusinessDTO;
import com.app.icontact.DTO.IdeaDTO4;
import com.app.icontact.DTO.UserDTO2;
import com.app.icontact.domain.BusinessVO;
import com.app.icontact.domain.IdeaVO;
import com.app.icontact.domain.UserVO;

import java.util.List;

public interface MypageService {

//    //    회원 정보 조회 (회원 정보 가져오기)
//    public UserVO getUser(Long id);

    //    회원 정보 조회 (회원 정보 가져오기)
    public UserDTO2 getUser(Long id);

    //    내 아아디어들 전부 가져오기
    public List<IdeaVO> getAllMyIdea(Long id);

    // 아이디어 뱅크 목록 출력
    public List<IdeaDTO4> getMyIdeas(Long id);

    //    회원정보 수정 (비번 제외)
//    public void modifyUserInfo(UserVO userVO);
    public void modifyUserInfo(UserDTO2 userDTO2);

    //    사업자 등록증 등록
    public void writeBusinessRegister(BusinessDTO businessDTO);

    //    사업자 등록증 정보 가져오기 (영업 담당자 정보 포함)
    public BusinessDTO getBusinessRegister(Long id);

    //    사업자 등록증 update
    public void modifyBusinessRegister(BusinessDTO businessDTO);


    default UserDTO2 toDTO(UserVO userVO){
        UserDTO2 userDTO2 = new UserDTO2();
        userDTO2.setId(userVO.getId());
        userDTO2.setUserEmail(userVO.getUserEmail());
        userDTO2.setUserPassword(userVO.getUserPassword());
        userDTO2.setUserName(userVO.getUserName());
        userDTO2.setUserNickname(userVO.getUserNickname());
        userDTO2.setUserType(userVO.getUserType());
        userDTO2.setUserIntro(userVO.getUserIntro());
        userDTO2.setUserPhone(userVO.getUserPhone());
        userDTO2.setUserStatus(userVO.getUserStatus());
        return userDTO2;
    }




}

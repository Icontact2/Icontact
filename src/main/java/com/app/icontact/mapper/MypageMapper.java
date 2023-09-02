package com.app.icontact.mapper;

import com.app.icontact.DTO.*;
import com.app.icontact.domain.BusinessVO;
import com.app.icontact.domain.IdeaVO;
import com.app.icontact.domain.UserVO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface MypageMapper {

////    회원 정보 조회 (회원 정보 가져오기)
//    public UserVO selectUser(Long id);

    //    회원 정보 조회 (회원 정보 가져오기)
    public UserDTO2 selectUser(Long id);

//    내 아아디어들 전부 가져오기
    public List<IdeaVO> selectAllMyIdea(Long id);

////    회원정보 수정 (비번 제외)
//    public void updateUser(UserVO userVO);

    //    회원정보 수정 (비번 제외)
    public void updateUser(UserDTO2 userDTO2);


//    사업자 등록증 등록
    public void insertBusinessRegister(BusinessDTO businessDTO);

    //    사업자 등록증 update
    public void updateBusinessRegister(BusinessDTO businessDTO);

//    사업자 등록증 정보 가져오기 (영업 담당자 정보 포함)
    public BusinessDTO selectBusinessRegister(Long id);


    //    회원Type 수정 (비번 제외)
    public void updateUserType(Long id);


    // 아이디어 뱅크 목록 출력
    public List<IdeaDTO4> selectMyIdeas(Long id);

}

package com.app.icontact.DAO;

import com.app.icontact.DTO.BusinessDTO;
import com.app.icontact.DTO.IdeaDTO4;
import com.app.icontact.DTO.UserDTO2;
import com.app.icontact.domain.BusinessVO;
import com.app.icontact.domain.IdeaVO;
import com.app.icontact.domain.UserVO;
import com.app.icontact.mapper.MypageMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

import java.util.List;

@Slf4j
@Repository
@RequiredArgsConstructor
public class MypageDAO {
    private final MypageMapper mypageMapper;

//    //    회원 정보 조회 (회원 정보 가져오기)
//    public UserVO findUser(Long id){
//        return mypageMapper.selectUser(id);
//    }

    //    회원 정보 조회 (회원 정보 가져오기)
    public UserDTO2 findUser(Long id){
        return mypageMapper.selectUser(id);
    }

    // 아이디어 뱅크 목록 출력
    public List<IdeaDTO4> findMyIdeas(Long id){
        return mypageMapper.selectMyIdeas(id);
    }

    //    내 아아디어들 전부 가져오기
    public List<IdeaVO> findAllMyIdea(Long id){
        return mypageMapper.selectAllMyIdea(id);
    }

//    //    회원정보 수정 (비번 제외)
//    public void changeUserInfo(UserVO userVO){
//
//        log.info("..........{}.......", userVO);
//
//        mypageMapper.updateUser(userVO);
//    }

    //    회원정보 수정 (비번 제외)
    public void changeUserInfo(UserDTO2 userDTO2){

        log.info("..........{}.......", userDTO2);

        mypageMapper.updateUser(userDTO2);
    }


    //    사업자 등록증 등록
    public void saveBusinessRegister(BusinessDTO businessDTO){
        mypageMapper.insertBusinessRegister(businessDTO);
    }

    //    사업자 등록증 정보 가져오기 (영업 담당자 정보 포함)
    public BusinessDTO findBusinessRegister(Long id){
        log.info("..........{}.......", id);
        log.info("..........{}.......", mypageMapper.selectBusinessRegister(id));
        log.info("..........{}.......", id);

        return mypageMapper.selectBusinessRegister(id);
    }

    //    회원Type 수정 (비번 제외)
    public void updateUserType(Long id){
        mypageMapper.updateUserType(id);
    }

    //    사업자 등록증 update
    public void changeBusinessRegister(BusinessDTO businessDTO){
        mypageMapper.updateBusinessRegister(businessDTO);
    }





}

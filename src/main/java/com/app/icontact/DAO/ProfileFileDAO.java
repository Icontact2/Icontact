package com.app.icontact.DAO;

import com.app.icontact.domain.ProfileFileVO;
import com.app.icontact.mapper.ProfileFileMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class ProfileFileDAO {
    private final ProfileFileMapper profileFileMapper;

    //    파일 추가
    public void saveProfile(ProfileFileVO profileFileVO){
        profileFileMapper.insertProfile(profileFileVO);
    }

    //    파일 조회
    public List<ProfileFileVO> findProfile(Long userId){
        return profileFileMapper.selectProfile(userId);
    }

    //    파일 one 조회
    public List<ProfileFileVO> selectOneProfile(Long userId){
        return profileFileMapper.selectOneProfile(userId);
    }



}

package com.app.icontact.mapper;


import com.app.icontact.domain.ProfileFileVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Optional;

@Mapper
public interface ProfileFileMapper {

    //    파일 추가
    public void insertProfile(ProfileFileVO profileFileVO);

    //    //    파일 삭제
//    public void delete(Long id);
//
//    //    게시글의 파일 전체 삭제
//    public void deleteAll(Long postId);
//
//    //    파일 조회
//    public List<ProfileFileVO> selectAll(Long userId);
//
    //    파일 조회
    public List<ProfileFileVO> selectProfile(Long userId);

    //    파일 one 조회
    public List<ProfileFileVO> selectOneProfile(Long userId);
}

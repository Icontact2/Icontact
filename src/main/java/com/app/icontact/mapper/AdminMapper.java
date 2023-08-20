package com.app.icontact.mapper;

import com.app.icontact.DTO.CommunityDTO;
import com.app.icontact.DTO.Pagination;
import com.app.icontact.domain.NoticeVO;
import com.app.icontact.domain.PaymentVO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface AdminMapper {
    //공지사항 작성
    public void insertNotice(NoticeVO noticeVO);

    //커뮤니티 관리목록 보기
    public List<CommunityDTO> selectAllCommunity (@Param("pagination") Pagination pagination);

    //커뮤니티 글 삭제
    public String deleteCommunity(String communityId);

    //결제목록 보기
    public List<PaymentVO> selectAllPayment(@Param("pagination") Pagination pagination);

    //결제 취소
    public String updateCancel(String paymentId);
}

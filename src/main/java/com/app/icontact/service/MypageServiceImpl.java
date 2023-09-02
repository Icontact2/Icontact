package com.app.icontact.service;

import com.app.icontact.DAO.IdeaFileDAO;
import com.app.icontact.DAO.MypageDAO;
import com.app.icontact.DAO.ProfileFileDAO;
import com.app.icontact.DTO.BusinessDTO;
import com.app.icontact.DTO.IdeaDTO4;
import com.app.icontact.DTO.UserDTO2;
import com.app.icontact.domain.BusinessVO;
import com.app.icontact.domain.IdeaVO;
import com.app.icontact.domain.UserVO;
import com.app.icontact.type.FileType;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpSession;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class MypageServiceImpl implements MypageService {
    private final MypageDAO mypageDAO;
    private final ProfileFileDAO profileFileDAO;
    private final IdeaFileDAO ideaFileDAO;
    private final HttpSession session;

//    @Override
//    public UserVO getUser(Long id) {
////        Long userId = (Long) session.getAttribute("id");
////        Long userId = (Long) session.getAttribute("id");
//
//        log.info("{}..........{}", "getUser",session.getAttribute("id"));
////        log.info("{}..........", userId);
//
////        return mypageDAO.findUser(47L);
//        return mypageDAO.findUser(id);
//    }

    @Override
    public UserDTO2 getUser(Long id) {
//        Long userId = (Long) session.getAttribute("id");
//        Long userId = (Long) session.getAttribute("id");

        log.info("{}..........{}", "getUser",session.getAttribute("id"));
//        log.info("{}..........", userId);

//        return mypageDAO.findUser(47L);

        final UserDTO2 userInfos = mypageDAO.findUser(id);

//        if(userInfos.){
//            userInfos.get().setFiles(profileFileDAO.findProfile(userInfos.get().getId()));
//        }
//        userInfos.setFiles(profileFileDAO.findProfile(userInfos.getId()));
        userInfos.setFiles(profileFileDAO.selectOneProfile(userInfos.getId()));

        log.info("{}..........{}", "getUser22",userInfos);
//        return mypageDAO.findUser(id);
        return userInfos;
    }


    @Override
    public List<IdeaVO> getAllMyIdea(Long id) {
        Long userId = (Long) session.getAttribute("id");
        return mypageDAO.findAllMyIdea(userId);
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public List<IdeaDTO4> getMyIdeas(Long id) {
//        String sessionId = (String)session.getAttribute("id");
//        Long userId = Long.parseLong(sessionId);
//        return mypageDAO.findMyIdeas(userId);


        //        아이디어 전체 목록
//        final List<IdeaDTO4> ideas = mypageDAO.findMyIdeas(userId);
        final List<IdeaDTO4> ideas = mypageDAO.findMyIdeas(id);
//        아이디어 하나씩 첨부파일 목록 담기
        ideas.forEach(idea -> idea.setFiles(ideaFileDAO.findAll(idea.getId())));
//        ideas.forEach(idea -> idea.setIdeaScarpCount(ideaDAO.findCountOfScraps(idea.getId())));
        return ideas;


    }

    //    @Override
//    public void modifyUserInfo(UserVO userVO) {
//
//        String sessionId = (String)session.getAttribute("id");
//        Long userId = Long.parseLong(sessionId);
//        userVO.setId(userId);
//        log.info("{}..........{}.......{}", session.getAttribute("id"), userVO, userId);
//        mypageDAO.changeUserInfo(userVO);
//    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void modifyUserInfo(UserDTO2 userDTO2) {

        String sessionId = (String)session.getAttribute("id");
        Long userId = Long.parseLong(sessionId);
        userDTO2.setId(userId);
        log.info("{},,,,{}..........{}.......{}", "modifyUserInfo", session.getAttribute("id"), userDTO2, userId);
        mypageDAO.changeUserInfo(userDTO2);

        log.info("서비스에서 확인1: {}", userDTO2.toString());
        log.info("파일 들어왔니? {}", userDTO2.getFiles());

        for(int i=0; i<userDTO2.getFiles().size(); i++){
            log.info("{}...........룰루", userDTO2.getId());
            userDTO2.getFiles().get(i).setUserId(userDTO2.getId());
            log.info("응 들어왔다 !! {}", userDTO2.getFiles());
            if(userDTO2.getFiles().get(i).getProfileType() == null){
                userDTO2.getFiles().get(i).setProfileType(FileType.NON_REPRESENTATIVE.name());
            }
            profileFileDAO.saveProfile(userDTO2.getFiles().get(i));

            log.info("....{}....", "for문 성공");
        }






    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void writeBusinessRegister(BusinessDTO businessDTO) {
        String sessionId = (String)session.getAttribute("id");
        Long userId = Long.parseLong(sessionId);
        businessDTO.setUserId(userId);
        mypageDAO.saveBusinessRegister(businessDTO);
    }


    @Override
    public BusinessDTO getBusinessRegister(Long id) {
//        log.info("{}..........99", mypageDAO.findUser(id).getId());
//        return mypageDAO.findBusinessRegister(mypageDAO.findUser(id).getId());

//        String sessionId = (String)session.getAttribute("id");
//        Long userId = Long.parseLong(sessionId);
        log.info("{}..1...98.....", "mypageService");
        log.info("{}..3........98.........",id);
        log.info("{}..2........99", mypageDAO.findUser(id).getId());
//        log.info("{}..3........98.........",id);

        final BusinessDTO businessInfos = mypageDAO.findBusinessRegister(mypageDAO.findUser(id).getId());

//        String sessionId = (String)session.getAttribute("id");
//        Long userId = Long.parseLong(sessionId);
//        businessInfos.setUserId(userId);

//        log.info("{}..4........98.........",id);
        log.info("{}..4........98.........","에베베베베베벱");
        if(businessInfos == null){
            log.info("{}..4........98.........","에베베베베베벱000000000");
        }
//        log.info("{}..4........98.........",id);
        log.info("..5..{}..5........98.........",businessInfos);
//        log.info("{}..66........98.........",mypageDAO.findBusinessRegister(id));
//        log.info("{}..88........98.........",mypageDAO.findBusinessRegister(mypageDAO.findUser(id).getId()));


//        return mypageDAO.findBusinessRegister(id);
        return businessInfos;
//        return mypageDAO.findBusinessRegister(mypageDAO.findUser(id).getId());
    }


    @Override
    public void modifyBusinessRegister(BusinessDTO businessDTO) {

    }
}

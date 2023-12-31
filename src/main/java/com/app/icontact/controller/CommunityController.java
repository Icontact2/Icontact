package com.app.icontact.controller;

import com.app.icontact.domain.CommunityVO;
import com.app.icontact.service.CommunityService;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.HttpSessionRequiredException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.servlet.view.RedirectView;

import javax.servlet.http.HttpSession;
import javax.websocket.Session;

@Slf4j
@Controller
@RequiredArgsConstructor
@RequestMapping("/community/*")
public class CommunityController {
    private final CommunityService communityService;

    @GetMapping("listAll")
    public void goToComListAll(Model model){
        model.addAttribute("lists", communityService.getListComAll());
    }

    @GetMapping("listMine")
    public void goToComListMine(Long id, Model model){
        model.addAttribute("posts", communityService.getListComMine(id));
    }

    @GetMapping("write")
    public void goToComWrite(CommunityVO communityVO){;}

    @PostMapping("write")
    public RedirectView writeCom(CommunityVO communityVO, RedirectAttributes redirectAttributes, HttpSession session){
//        Long userId = (Long)session.getAttribute("id");

//        redirectAttributes.addAttribute("id", communityVO.getId());
        log.info("{}..............", communityVO.toString());
        communityService.writeCom(communityVO);
        return new RedirectView("/community/listAll");
    }

    @GetMapping("detail")
    public void goToRead(){;}

//
//    @GetMapping(value = {"read", "modify"})
//
//    @PostMapping("modify")
//
//    @GetMapping("remove")




}

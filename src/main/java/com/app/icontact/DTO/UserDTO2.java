package com.app.icontact.DTO;

import com.app.icontact.domain.ProfileFileVO;
import com.app.icontact.domain.ProfileVO;
import lombok.Data;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Data
@Component
public class UserDTO2 {
    private Long id;
    private String userEmail;
    private String userPassword;
    private String userName;
    private String userNickname;
    private String userType;
    private String userIntro;
    private String userPhone;
    private String userStatus;
//    private ProfileVO profileVO;

    private List<ProfileFileVO> files = new ArrayList<>();
    private List<Long> fileIdsForDelete = new ArrayList<>();
}

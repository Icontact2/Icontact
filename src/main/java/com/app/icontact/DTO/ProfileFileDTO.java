package com.app.icontact.DTO;

import com.app.icontact.domain.ProfileFileVO;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
@Data
@NoArgsConstructor
public class ProfileFileDTO {
    private Long id;
    private String profilePath;
    private String profileUuid;
    private String profileName;
    private String profileType;
    private Long profileSize;
    private Long userId;

    private List<ProfileFileVO> files = new ArrayList<>();
    private List<Long> fileIdsForDelete = new ArrayList<>();
}

package site.metacoding.animalprojectfrontend.web.api.dto.user;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ShelterDto {
    private Integer id;
    private String orgNm;
    private String careNm;
    private String jibunAddr;
    private String weekOprStime;
    private String closeDay;
    private String careTel;
    private String saveTrgtAnimal;
}

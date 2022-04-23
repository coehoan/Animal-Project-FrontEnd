package site.metacoding.animalprojectfrontend.domain.shelterde;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@EntityListeners(AuditingEntityListener.class)
public class ShelterDe { // DB에 테이블 ShelterDe로 인서트 됨. 이름 변경함.
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    // 주석은 예비로 남겨둔 부분
    @Column(length = 300, nullable = true)
    private String careNm;
    @Column(length = 300, nullable = true)
    private String orgNm;
    @Column(length = 300, nullable = true)
    private String divisionNm;
    @Column(length = 300, nullable = true)
    private String saveTrgtAnimal;
    @Column(length = 300, nullable = true)
    private String careAddr;
    @Column(length = 300, nullable = true)
    private String jibunAddr;

    @Column(length = 300, nullable = true)
    private String lat;

    @Column(length = 300, nullable = true)
    private String lng;

    @Column(length = 300, nullable = true)
    private String dsignationDate;

    @Column(length = 300, nullable = true)
    private String weekOprEtime;
    @Column(length = 300, nullable = true)
    private String weekOprStime;
    @Column(length = 300, nullable = true)
    private String weekCellEtime;
    @Column(length = 300, nullable = true)
    private String weekCellStime;
    @Column(length = 300, nullable = true)
    private String weekendOprEtime;
    @Column(length = 300, nullable = true)
    private String weekendOprStime;
    @Column(length = 300, nullable = true)
    private String weekendCellEtime;
    @Column(length = 300, nullable = true)
    private String weekendCellStime;
    @Column(length = 300, nullable = true)
    private String closeDay;
    @Column(length = 300, nullable = true)
    private String careTel;

    @Column(length = 300, nullable = true)
    private String medicalCnt;
    @Column(length = 300, nullable = true)
    private String quarabtineCnt;
    @Column(length = 300, nullable = true)
    private String feedCnt;
    @Column(length = 300, nullable = true)
    private String transCarCnt;
    @Column(length = 300, nullable = true)
    private String dataStdDt;
    @Column(length = 300, nullable = true)
    private Integer vetPersonCnt;
    @Column(length = 300, nullable = true)
    private Integer specsPersonCnt;
    @Column(length = 300, nullable = true)
    private Integer breedCnt;
    @Column(length = 300, nullable = true)
    private Integer rnum;

}

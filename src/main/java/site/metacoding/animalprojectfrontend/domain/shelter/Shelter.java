package site.metacoding.animalprojectfrontend.domain.shelter;

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

@AllArgsConstructor
@NoArgsConstructor
@Data
@EntityListeners(AuditingEntityListener.class)
@Entity
public class Shelter {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = true)
    private String orgNm;

    @Column(nullable = true)
    private String careNm;

    @Column(nullable = true)
    private String jibunAddr;

    @Column(nullable = true)
    private String weekOprStime;

    @Column(nullable = true)
    private String weekOprEtime;

    @Column(nullable = true)
    private String closeDay;

    @Column(nullable = true)
    private String careTel;

    @Column(nullable = true)
    private String saveTrgtAnimal;

}

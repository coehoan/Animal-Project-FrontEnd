package site.metacoding.animalprojectfrontend.domain.shelter;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ShelterRepository extends JpaRepository<Shelter, Integer> {
    @Query(value = "SELECT * FROM shelterdedto")
    Shelter downList();
}

package site.metacoding.animalprojectfrontend.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lombok.RequiredArgsConstructor;
import site.metacoding.animalprojectfrontend.domain.shelter.Shelter;
import site.metacoding.animalprojectfrontend.domain.shelter.ShelterRepository;
import site.metacoding.animalprojectfrontend.domain.user.User;
import site.metacoding.animalprojectfrontend.domain.user.UserRepository;
import site.metacoding.animalprojectfrontend.web.api.dto.user.JoinDto;
import site.metacoding.animalprojectfrontend.web.api.dto.user.LoginDto;
import site.metacoding.animalprojectfrontend.web.api.dto.user.ShelterDto;

@RequiredArgsConstructor
@Service
public class UserService {
    private final UserRepository userRepository;
    private final ShelterRepository shelterRepository;

    @Transactional
    public void 회원가입(JoinDto joinDto) {
        userRepository.save(joinDto.toEntity());
    }

    public User 로그인(LoginDto loginDto) {
        User userEntity = userRepository.aLogin(loginDto.getUsername(), loginDto.getPassword());
        return userEntity;
    }

    public Shelter 쉘터(ShelterDto shelterDto) {
        Shelter shelterEntity = shelterRepository.downList();
        return shelterEntity;
    }
}

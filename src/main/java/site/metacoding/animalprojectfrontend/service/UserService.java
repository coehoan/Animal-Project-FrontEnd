package site.metacoding.animalprojectfrontend.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lombok.RequiredArgsConstructor;
<<<<<<< HEAD
import site.metacoding.animalprojectfrontend.config.user.User;
import site.metacoding.animalprojectfrontend.config.user.UserRepository;
=======
import site.metacoding.animalprojectfrontend.domain.user.User;
import site.metacoding.animalprojectfrontend.domain.user.UserRepository;
>>>>>>> d8f43c6a07498ed29efabd2a10c9685b9f85336c
import site.metacoding.animalprojectfrontend.web.api.dto.user.JoinDto;
import site.metacoding.animalprojectfrontend.web.api.dto.user.LoginDto;

@RequiredArgsConstructor
@Service
public class UserService {
    private final UserRepository userRepository;

    @Transactional
    public void 회원가입(JoinDto joinDto) {
        userRepository.save(joinDto.toEntity());
    }

    public User 로그인(LoginDto loginDto) {
        User userEntity = userRepository.aLogin(loginDto.getUsername(), loginDto.getPassword());
        return userEntity;
    }
}

package site.metacoding.animalprojectfrontend.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lombok.RequiredArgsConstructor;
import site.metacoding.animalprojectfrontend.domain.user.User;
import site.metacoding.animalprojectfrontend.domain.user.UserRepository;
<<<<<<< HEAD
import site.metacoding.animalprojectfrontend.web.api.dto.user.JoinDto;
=======
import site.metacoding.animalprojectfrontend.web.api.dto.JoinDto;
>>>>>>> fb00b36902b41162eae1f5fb9b170ac49922f8c4
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
<<<<<<< HEAD
        User userEntity = userRepository.aLogin(loginDto.getUsername(), loginDto.getPassword());
=======
        User userEntity = userRepository.mLogin(loginDto.getUsername(), loginDto.getPassword());
>>>>>>> fb00b36902b41162eae1f5fb9b170ac49922f8c4
        return userEntity;
    }
}

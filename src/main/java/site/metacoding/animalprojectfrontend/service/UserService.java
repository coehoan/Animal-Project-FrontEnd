package site.metacoding.animalprojectfrontend.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lombok.RequiredArgsConstructor;
import site.metacoding.animalprojectfrontend.domain.user.UserRepository;
import site.metacoding.animalprojectfrontend.web.api.dto.JoinDto;

@RequiredArgsConstructor
@Service
public class UserService {
    private final UserRepository userRepository;

    @Transactional
    public void 회원가입(JoinDto joinDto) {
        // save하면 db에 insert하고 insert된 결과를 다시 return 해준다.

        userRepository.save(joinDto.toEntity());

    }
}

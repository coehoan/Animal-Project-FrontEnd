package site.metacoding.animalprojectfrontend.web.api;

import javax.servlet.http.HttpSession;

<<<<<<< HEAD
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
=======
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
>>>>>>> fb00b36902b41162eae1f5fb9b170ac49922f8c4

import lombok.RequiredArgsConstructor;
import site.metacoding.animalprojectfrontend.domain.user.User;
import site.metacoding.animalprojectfrontend.service.UserService;
<<<<<<< HEAD
import site.metacoding.animalprojectfrontend.web.api.dto.ResponseDto;
import site.metacoding.animalprojectfrontend.web.api.dto.user.JoinDto;
import site.metacoding.animalprojectfrontend.web.api.dto.user.LoginDto;

@RequiredArgsConstructor
@RestController
=======
import site.metacoding.animalprojectfrontend.web.api.dto.JoinDto;
import site.metacoding.animalprojectfrontend.web.api.dto.ResponseDto;
import site.metacoding.animalprojectfrontend.web.api.dto.user.LoginDto;

@RequiredArgsConstructor
@Controller
>>>>>>> fb00b36902b41162eae1f5fb9b170ac49922f8c4
public class UserApiController {
    private final UserService userService;
    private final HttpSession session;

<<<<<<< HEAD
    @PostMapping("/join")
=======
    @PostMapping("/api/join")
>>>>>>> fb00b36902b41162eae1f5fb9b170ac49922f8c4
    public ResponseDto<String> join(@RequestBody JoinDto joinDto) {
        userService.회원가입(joinDto);
        return new ResponseDto<String>(1, "회원가입성공", null);
    }

<<<<<<< HEAD
    @PostMapping("/login")
=======
    @PostMapping("/api/login")
>>>>>>> fb00b36902b41162eae1f5fb9b170ac49922f8c4
    public ResponseDto<String> login(@RequestBody LoginDto loginDto) {
        User userEntity = userService.로그인(loginDto);
        if (userEntity == null) {
            return new ResponseDto<String>(-1, "로그인실패", null);
        }
<<<<<<< HEAD
=======
        session.setAttribute("principal", userEntity);
>>>>>>> fb00b36902b41162eae1f5fb9b170ac49922f8c4
        return new ResponseDto<String>(1, "로그인성공", null);
    }
}

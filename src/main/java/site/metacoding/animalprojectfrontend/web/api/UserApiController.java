package site.metacoding.animalprojectfrontend.web.api;

import org.springframework.stereotype.Controller;

import lombok.RequiredArgsConstructor;
import site.metacoding.animalprojectfrontend.service.UserService;

@RequiredArgsConstructor
@Controller
public class UserApiController {
    private final UserService userService;
}

package site.metacoding.animalprojectfrontend.web;

import org.springframework.stereotype.Controller;

import lombok.RequiredArgsConstructor;
import site.metacoding.animalprojectfrontend.service.UserService;

@RequiredArgsConstructor
@Controller
public class UserController {
    private final UserService userService;
}

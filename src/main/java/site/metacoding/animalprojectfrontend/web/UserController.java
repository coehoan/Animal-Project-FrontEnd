package site.metacoding.animalprojectfrontend.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class UserController {
    @GetMapping("/main/joinForm")
    public String join() {
        return "/main/joinForm";
    }

    @GetMapping("/main/loginForm")
    public String login() {
        return "/main/loginForm";
    }
}

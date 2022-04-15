package site.metacoding.animalprojectfrontend.web.api;

import javax.persistence.PostRemove;

import org.springframework.stereotype.Controller;

import lombok.RequiredArgsConstructor;
import site.metacoding.animalprojectfrontend.domain.post.PostRepository;

@RequiredArgsConstructor
@Controller
public class PostApiController {
    private final PostRepository postRepository;
}

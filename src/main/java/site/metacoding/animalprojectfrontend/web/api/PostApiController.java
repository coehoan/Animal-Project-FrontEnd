package site.metacoding.animalprojectfrontend.web;

import javax.persistence.PostRemove;

import org.springframework.stereotype.Controller;

import lombok.RequiredArgsConstructor;
import site.metacoding.animalprojectfrontend.domain.post.PostRepository;

@RequiredArgsConstructor
@Controller
public class PostController {
    private final PostRepository postRepository;
}

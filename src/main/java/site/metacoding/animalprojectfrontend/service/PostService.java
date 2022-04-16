package site.metacoding.animalprojectfrontend.service;

import javax.persistence.PostRemove;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import site.metacoding.animalprojectfrontend.config.post.PostRepository;

@RequiredArgsConstructor
@Service
public class PostService {
    private final PostRepository postRepository;
}

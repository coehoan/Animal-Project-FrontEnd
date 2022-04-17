package site.metacoding.animalprojectfrontend.service;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
<<<<<<< HEAD
import site.metacoding.animalprojectfrontend.config.post.PostRepository;
=======
import site.metacoding.animalprojectfrontend.domain.post.Post;
import site.metacoding.animalprojectfrontend.domain.post.PostRepository;
>>>>>>> d8f43c6a07498ed29efabd2a10c9685b9f85336c

@RequiredArgsConstructor
@Service
public class PostService {
    private final PostRepository postRepository;

    public void 글쓰기(Post post) {
        postRepository.save(post);
    }
}

package site.metacoding.animalprojectfrontend.web.api.dto.user;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
<<<<<<< HEAD
import site.metacoding.animalprojectfrontend.config.user.User;
=======
import site.metacoding.animalprojectfrontend.domain.user.User;
>>>>>>> d8f43c6a07498ed29efabd2a10c9685b9f85336c

@AllArgsConstructor
@NoArgsConstructor
@Data
public class JoinDto {
    private String username;
    private String password;
    private String email;
    private String male;
    private String addr;

    public User toEntity() {
        User user = new User();
        user.setUsername(this.username);
        user.setPassword(this.password);
        user.setEmail(this.email);
        user.setMale(this.male);
        user.setAddr(this.addr);
        return user;
    }
}

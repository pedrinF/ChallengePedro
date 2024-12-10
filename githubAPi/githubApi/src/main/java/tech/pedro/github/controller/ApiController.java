package tech.pedro.github.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tech.pedro.github.client.GithubClient;
import tech.pedro.github.client.RepositoryResponse;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class ApiController {

    private final GithubClient githubClient;

    public ApiController(GithubClient githubClient) {
        this.githubClient = githubClient;
    }



    @GetMapping(value = "/repos/{username}")
    public ResponseEntity<List<RepositoryResponse>> listUserRepositories(
            @RequestHeader(value = "token") String personalAccesToken,
            @PathVariable("username") String username) {
        try {
            var repos = githubClient.getRepositories(
                    "bearer " + personalAccesToken,
                    "2022-11-28",
                    "public",
                    username);

            return ResponseEntity.ok(repos);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body(null);
        }
    }
}

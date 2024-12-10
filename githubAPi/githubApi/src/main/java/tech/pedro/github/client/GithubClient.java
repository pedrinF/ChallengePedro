package tech.pedro.github.client;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.service.annotation.GetExchange;

import java.util.List;

public interface GithubClient {

    @GetExchange(value = "/users/{username}/repos")
    List<RepositoryResponse> getRepositories(@RequestHeader("Authorization") String token,
                                             @RequestHeader(value = "X-GitHub-Api-Version", defaultValue = "2022-11-28")
                                             String githubApiVersion,
                                             @RequestParam(value = "visibility", defaultValue = "public") String visibility,
                                             @PathVariable("username") String username);
}

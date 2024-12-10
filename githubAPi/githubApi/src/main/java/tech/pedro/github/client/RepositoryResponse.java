package tech.pedro.github.client;

import com.fasterxml.jackson.annotation.JsonProperty;

public record RepositoryResponse(String id,
                                 String name,
                                 @JsonProperty("html_url") String url,
                                 @JsonProperty("private") boolean isPrivate) {
}

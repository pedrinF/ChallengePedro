package tech.pedro.github.client;

import com.fasterxml.jackson.annotation.JsonProperty;

public record OwnerResponse(
        String login,
        @JsonProperty("avatar_url") String avatarUrl
) {}

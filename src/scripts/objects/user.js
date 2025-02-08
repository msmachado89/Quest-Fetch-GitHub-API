const user = {
  avatarUrl: "",
  name: "",
  bio: "",
  userName: "",
  followers: "",
  following: "",
  repositories: [],
  events: [],
  setInfo(gitHubUser) {
    this.avatarUrl = gitHubUser.avatar_url
    this.name = gitHubUser.name
    this.bio = gitHubUser.bio
    this.userName = gitHubUser.login
    this.followers = gitHubUser.followers
    this.following = gitHubUser.following
  },
  setRepositories(repositories) {
    this.repositories = repositories
  },
  setEvents(events) {
    this.events = events.filter((event) => event.type === "PushEvent" || event.type === "CreateEvent").map((event) => {
        if (event.type === "PushEvent") {
          const commit =
            event.payload.commits?.[event.payload.commits.length - 1]
          return {
            type: "PushEvent",
            repoName: event.repo.name,
            commitMessage: commit ? commit.message : "Sem mensagem de commit",
          }
        } else if (event.type === "CreateEvent") {
          return {
            type: "CreateEvent",
            repoName: event.repo.name,
            commitMessage: "Sem mensagem de commit",
          }
        }
      })
  },
}

export { user }

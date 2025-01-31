const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    followers: '',
    following: '',
    repositories: [],
    eventsCreate: [],
    eventsPush: [{
        eventPushRepository: '',
        eventPushCommit: '',
    }],
    setInfo(gitHubUser) {
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
    },
    setRepositories(repositories){
        this.repositories = repositories
    },
    setEvents(events){
    //   if (events.type === "CreateEvent") {
    //     this.eventsCreate += events.name
    //   } else if (events.type === "PushEvent") {
    //     this.eventsPush.eventPushRepository = events.name
    //     this.eventsPush.eventPushCommit =
    //       events.payload.commits.O.author.message
    //   }

    //   const commitMessages = events
    //     .filter((event) => event.type === "PushEvent") // Filtra apenas eventos de push
    //     .flatMap((event) => event.payload.commits || []) // Obtém todos os commits
    //     .map((commit) => commit.message) // Extrai apenas a mensagem do commit

      console.log(events)
    }
}

export { user }
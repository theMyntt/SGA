interface env {
  baseUrl: string,
  port: string,
  routes: {
    getUserInfoRoute: string,
    setUserInfoRoute: string,
    getMentionRoute: string
  }
}

export const dev: env = {
  baseUrl: "localhost",
  port: ":5000",
  routes: {
    getUserInfoRoute: "/api/users/login",
    setUserInfoRoute: "/api/users/signup",
    getMentionRoute: "/api/users/mention"
  }
}
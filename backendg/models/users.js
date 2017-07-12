const userSchema = mongoos.Schema ({
  facebook: {
    id: String,
    token: String,
    email: String,
    name: String,
  }
})

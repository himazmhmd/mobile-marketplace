import {Injectable} from '@angular/core'

interface user{
  username: string,
  uid: string
}

@Injectable()
export class userservice{
  private user: user

  constructor() {

  }

  setuser(user: user){
    this.user = user
  }
  getUid(){
    this.user.uid
  }
}
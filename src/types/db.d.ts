export interface User {
  name: string
  email: string
  image: string
  id: string
}

export interface Chat {
  id: string
  messages: Message[]
}

export interface Message {
  id: string
  senderId: string
  receiverId: string
  text: string
  timestamp: number
}

export interface FriendRequest {
  id: string
  senderId: string
  receiverId: string
}

// You can also create a namespace to group these types
export namespace DB {
  export type UserType = User
  export type ChatType = Chat
  export type MessageType = Message
  export type FriendRequestType = FriendRequest
}
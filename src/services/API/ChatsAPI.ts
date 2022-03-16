import BaseAPI from "./BaseAPI";

export interface GetChatData {
  offset:number
  limit:number
  title:string
}

export interface CreateChatData {
  title:string
}
export interface GetUsersChatData {
  id:number
  params:{
    offset:number
    limit:number
    name:string
    email:string
  }
  
}
export interface UploadChatAvatarData {
  chatId :number
  avatar :FormData
}

export interface AddUsersData {
  chatId :number
  users : number[]
}

export class ChatsAPI extends BaseAPI {
  constructor() {
    super("/chats");
  }

  getChats(data:GetChatData): Promise<any> {
    return this.http.get("/",{data, isQueryParams:true});
  }

  createChat(data: CreateChatData): Promise<any> {
    return this.http.post("/", { data }).catch((e) => {
      console.log(e, "catch");
    });
  }
  deleteChats(chatId:Record<string,number>): Promise<any> {
    return this.http.delete("/",{data:chatId});
  }
  getUsersChat({params,id}:GetUsersChatData): Promise<any> {
    return this.http.get(`/${id}`,{data:params, isQueryParams:true});
  }
  getNewMessagesCount(chatId:number): Promise<any> {
    return this.http.get(`/new/${chatId}`);
  }
  uploadAvatar(data: UploadChatAvatarData): Promise<any> {
    return this.http.put("/avatar", { data,headers:{'Content-Type': 'multipart/form-data'} }).catch((e) => {
      console.log(e, "catch");
    });
  }
  addUsers(data: AddUsersData): Promise<any> {
    return this.http.put("/users", { data }).catch((e) => {
      console.log(e, "catch");
    });
  }
  deleteUsers(data: AddUsersData): Promise<any> {
    return this.http.delete("/users",{data});
  }
  getToken(id: number): Promise<any> {
    return this.http.post(`/token/${id}`).catch((e) => {
      console.log(e, "catch");
    });
  }

  delete: undefined;
  create: undefined;
  update: undefined;
  read: undefined;
}

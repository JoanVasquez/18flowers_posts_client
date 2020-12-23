import axios, { AxiosResponse } from "axios";
import { DEV_URL, PROD_URL } from "../constants/BASE_URL";
import Post from "../models/Post";

export default class PostService {
  private url: string = "";

  constructor() {
    if (process.env.NODE_ENV === "production") {
      this.url = PROD_URL;
    } else if (
      process.env.NODE_ENV === "development" ||
      process.env.NODE_ENV === "test"
    ) {
      this.url = DEV_URL;
    }
  }

  public async list(): Promise<any> {
    try {
      const result: AxiosResponse = await axios.get(`${this.url}/api/post`);
      return result.data;
    } catch (ex) {
      throw {
        data: ex.response.statusText,
        status: ex.response.status,
      };
    }
  }

  public async update(post: Post): Promise<any> {
    try {
      const result: AxiosResponse = await axios.put(
        `${this.url}/api/post`,
        post
      );
      return result.data;
    } catch (ex) {
      throw {
        data: ex.response.statusText,
        status: ex.response.status,
      };
    }
  }
}

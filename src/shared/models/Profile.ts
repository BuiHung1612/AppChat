import { ImageProps } from "react-native"

export interface Post {

    id: string,
    createUp: Date,
    subtitle: string,
    image: string,
    like: number,
    disLike: number,
    isLike: boolean

}


export interface UserProfile {
    id: string,
    userName: string,
    subtitle: string,
    description: string,
    sex: number,
    userImage: ImageProps,
    age: number,
    posts: Post,
    followers: number,
    following: number,
    visited: number,
    chips: Array<string>
}

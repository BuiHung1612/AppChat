export interface Post {
    item: {
        id: string,
        createUp: Date,
        subtitle: string,
        image: string,
        like: number,
        disLike: number,
        isLike: boolean
    }
}


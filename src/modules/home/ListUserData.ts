import { Post } from "../../shared/models/Profile"

const ListUser = Array(10).fill('').map((e, i) => ({
    id: `User${i}`,
    userName: i % 2 == 0 ? 'Bùi Văn Hùng' : 'Bùi Anh Tuấn',
    subtitle: 'Anh ấy là người mới',
    chips: ["Thích ăn đồ ngọt", "Nhút nhát", "Nghiện internet", "Thích ở nhà"],
    followers: 999,
    following: 0,
    visited: 999,
    description: 'Chính phủ Việt Nam, Thủ tướng Chính phủ Việt Nam, Cổng Thông tin điện tử Chính phủ',
    sex: i % 2 == 0 ? 0 : 1,
    age: Math.floor(Math.random() * 10) + 18,
    posts: i % 2 == 0 ? Array(2).fill('').map((e, i) => ({
        id: `post${i}up`,
        userName: 'Bùi Văn Hùng',
        userImage: require('../../assets/images/img_user.jpg'),
        sex: i % 2 == 0 ? 0 : 1,
        age: Math.floor(Math.random() * 10) + 18,
        createUp: new Date().toLocaleDateString(),
        subtitle: '... Không biết nói gì',
        image: i % 2 == 0 ? 'https://i.pinimg.com/564x/47/86/8a/47868ae5d1357c6a554dadc8e8ecb7f4.jpg' : 'https://i.pinimg.com/564x/f5/4c/5a/f54c5a154a34e891c919d17cc75a7d79.jpg',
        like: 999,
        disLike: 1,
        comments: [
            {
                id: 1,
                userName: 'Minh Duk',
                userImage: require('../../assets/images/img_user.jpg'),
                createUp: new Date().toLocaleDateString(),
                sex: i % 2 == 0 ? 0 : 1,
                age: Math.floor(Math.random() * 10) + 18,
                content: 'Hello world'
            },
            {
                id: 2,
                userName: 'Hảo hán',
                userImage: require('../../assets/images/img_user.jpg'),
                createUp: new Date().toLocaleDateString(),
                sex: 1,
                age: Math.floor(Math.random() * 10) + 18,
                content: 'Cái gì á'

            }
        ],
        isLike: false
    })) : Array(1).fill('').map((e, i) => ({
        id: `post${i}up`,
        userName: 'Bùi Văn Hùng',
        userImage: require('../../assets/images/img_user.jpg'),
        sex: i % 2 == 0 ? 0 : 1,
        age: Math.floor(Math.random() * 10) + 18,
        createUp: new Date().toLocaleDateString(),
        subtitle: '... Không biết nói gì',
        image: i % 2 == 0 ? 'https://i.pinimg.com/564x/47/86/8a/47868ae5d1357c6a554dadc8e8ecb7f4.jpg' : 'https://i.pinimg.com/564x/f5/4c/5a/f54c5a154a34e891c919d17cc75a7d79.jpg',
        like: 999,
        disLike: 1,
        isLike: false
    }))
}))

export const FAKE_GET_API_USER = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data: ListUser
            });
        }, 2000);
    });
};


export default ListUser

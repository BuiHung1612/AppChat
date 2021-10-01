import { Post } from "../../shared/models/Profile"

const ListUser = Array(10).fill('').map((e, i) => ({
    id: `Str${i}ge`,
    userName: i % 2 == 0 ? 'Bùi Anh Tuấn' : 'Demons',
    subtitle: 'Anh ấy là người mới',
    sex: i % 2 == 0 ? 0 : 1,
    userImage: require('../../assets/images/img_user.jpg'),
    age: Math.floor(Math.random() * 10) + 18
}))

export const PostData: any = Array(5).fill('').map((e, i) => ({
    id: `post${i}up`,
    createUp: new Date().toDateString(),
    subtitle: '... Không biết nói gì',
    image: i % 2 == 0 ? 'https://i.pinimg.com/564x/47/86/8a/47868ae5d1357c6a554dadc8e8ecb7f4.jpg' : 'https://i.pinimg.com/564x/f5/4c/5a/f54c5a154a34e891c919d17cc75a7d79.jpg',
    like: 999,
    disLike: 1,
    isLike: false
}))


export default ListUser

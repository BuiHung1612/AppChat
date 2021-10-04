export const PostData: any = Array(6).fill('').map((e, i) => ({
    idUser: `post${i}up`,
    userName: '@HungBui',
    userImage: require('../../assets/images/img_user.jpg'),
    sex: i % 2 == 0 ? 0 : 1,
    age: Math.floor(Math.random() * 10) + 18,
    createUp: new Date().toLocaleDateString(),
    subtitle: '... Không biết nói gì',
    image: i % 2 == 0 ? 'https://i.pinimg.com/564x/47/86/8a/47868ae5d1357c6a554dadc8e8ecb7f4.jpg' : i == 3 ? null : 'https://i.pinimg.com/564x/f5/4c/5a/f54c5a154a34e891c919d17cc75a7d79.jpg',
    like: 999,
    disLike: 1,
    isLike: false
}))
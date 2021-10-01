export const ListConverstations = Array(10)
    .fill('')
    .map((e, i) => ({
        id: `Str${i}ge`,
        userName: i % 2 == 0 ? 'Bùi Anh Tuấn' : 'Demons',
        subtitle: 'Anh ấy là người mới',
        sex: i % 2 == 0 ? 0 : 1,
        userImage: require('../../assets/images/img_user.jpg'),
        age: Math.floor(Math.random() * 10) + 18
    }));

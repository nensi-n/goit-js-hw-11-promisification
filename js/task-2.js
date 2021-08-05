const users = [
    { name: 'Mango', active: true },
    { name: 'Poly', active: false },
    { name: 'Ajax', active: true },
    { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {
    const updatedUsers = allUsers.map(user =>
        user.name === userName ? { ...user, active: !user.active } : user,
    );
     return Promise.all(updatedUsers);
};

const loggers = updatedUsers => console.table(updatedUsers);

toggleUserState(users, 'Mango').then(loggers);
toggleUserState(users, 'Lux').then(loggers);

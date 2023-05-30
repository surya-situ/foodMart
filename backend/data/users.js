import bcrypt from "bcryptjs"

const users = [
    {
        name: 'Admin User',
        email: 'roseighara@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Suryakanta Das',
        email: 'suryakanta@gmail.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Shresthita Das',
        email: 'shresthita@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Ritesh Baral',
        email: 'ritesh@gmail.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Subhasree Behera',
        email: 'subhasree@gmail.com',
        password: bcrypt.hashSync('123456', 10),
    }
]

export default users;
let state = {
    profilePage: {
        posts: [
            {id: 1, message: "It's my first project", likesCount: 30},
            {id: 2, message: "I learning React", likesCount: 50},
            {id: 3, message: "I finished 25 lessons", likesCount: 5},
            {id: 4, message: "I finished 27 lessons", likesCount: 15}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Dmitri"},
            {id: 2, name: "Victoria"},
            {id: 3, name: "Valery"},
            {id: 4, name: "Pavel"},
            {id: 5, name: "Vlad"}
        ],
        messages: [
            {id: 1, message: "Hi!"},
            {id: 2, message: "How is your React-wayOfSamurai?"},
            {id: 3, message: "Good!"}
        ]
    },
    sidebar: {
        friends: [
            {id: 2, name: "Victoria"},
            {id: 3, name: "Valery"},
            {id: 4, name: "Pavel"}
        ]
    }
}
export default state;
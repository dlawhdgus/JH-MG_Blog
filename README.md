auth : [
    Post /api/auth/sign-up
    example : {
        "email":"example@gmail.com",    //not null   
        "nickname":"tester",            //not null
        "password":"thisispassword",    //not null
        "introduce":"test-introduce"    
    }

    Post /api/auth/sign-in
    example : {
        "email":"example@gmail.com",
        "password":"thisispassword"
    }

    Get /api/auth
        show all user's data
]
board : [
    Get /api/board
        show all board's data
    
    Post /api/board
    example : {
        "title" : "test-title",
        "subtitle" : "test-subtitle",
        "body" : "test-body"
    }
]
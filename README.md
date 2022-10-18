# auth
    ```javascript
    - Post /api/auth/sign-up
    example : {
        "email":"example@gmail.com",    //not null   
        "nickname":"tester",            //not null
        "password":"thisispassword",    //not null
        "introduce":"test-introduce"    
    }
    
    - Post /api/auth/sign-in
    example : {
        "email":"example@gmail.com",
        "password":"thisispassword"
    }
    - Get /api/auth
        show all user's data
    ```
# board
    ```javascript
    - Get /api/board
        show all board's data

    - Post /api/board
    example : {
        "title" : "test-title",
        "subtitle" : "test-subtitle",
        "body" : "test-body"
    }

    - Patch /api/board/:_id           //mongodb-ObjectId
    example : {
        "title" : "change-title"   //title만 바뀜
    }

    - Delete /api/board/:id           //mongodb-ObjectId
        id에 해당되는 값만 삭제

    - Delete /api/board
    example : {
        _id : ["_id","_id"]     //_id값을 넣어 여러개 삭제
    }
    ```
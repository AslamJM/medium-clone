export interface Post{
    _id:string,
    title:string,
    description:string,
    author:{
        name:string,
        image:{asset:{
            _ref:string
        }}
    },
    mainImage:{
        asset:{
            _ref:string
        }
    },
    slug:{
        current:string
    },
    body:object[],
    _createdAt:string,
    comments:Comment[]
}

export interface Comment{
    approved:boolean,
    name:string,
    email:string,
    comment:string,
    post:{
        _ref:string,
        type:string
    },
    _createdAt:string,
    _id:string,
    _rev:string,
    _type:string,
    _updatedAt:string
}
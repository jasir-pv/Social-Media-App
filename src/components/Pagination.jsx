import React, { useEffect } from "react";
import { Pagination, PaginationItem } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../actions/posts";


const Paginate = ({page})=>{

    // const post = useSelector((state) => (currentId? state.posts.find((message) => message._id)))
    const dispatch = useDispatch()
    const {numberOfPages} = useSelector((state) => state.posts)
    
    useEffect(()=>{
        if(page) dispatch (getPosts(page))

    },[page])

    return (
        <Pagination
        count={numberOfPages}
        page={Number(page)}
        variant="outlined"
        color="primary"
        renderItem={(item) => (
            <PaginationItem {...item} component={Link} to={`/posts?page=${item.page}`}/>
        )}/>
    )
}



export default Paginate
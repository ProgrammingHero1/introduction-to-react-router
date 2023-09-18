import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {
    const {id, title} = post;

    const navigate = useNavigate();

    const postStyle = {
        border: '2px solid yellow',
        padding: '5px',
        borderRadius: '20px'
    }

    const handleShowDetail = () =>{
        navigate(`/post/${id}`);
    }

    return (
        <div style={postStyle}>
            <h4>Post of Id: {id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Detail</Link>
            <Link to={`/post/${id}`}><button>Show Details</button></Link>
            <button onClick={handleShowDetail}>Click to see details</button>
        </div>
    );
};

export default Post;
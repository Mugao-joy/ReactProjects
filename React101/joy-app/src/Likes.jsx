const Likes = (liked , handleDislike, handleLike) => {
    return (
        <div>
            <h1>I'm a Software Engineering Student.</h1>
            <h2>{liked > 5 ? <h3>I can code Hello World</h3> : <h3> Tap Tap Screen</h3>}</h2>
            <button onClick={handleLike}>
                <FaThumbsUp />
            </button>
            <button onClick={handleDislike}>
                <FaThumbsDown />
            </button>
            
        </div>
    );
}
export default Likes
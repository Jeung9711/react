const styles = {
    wrapper: {
    margin: 8, padding: 8,
    display: "flex", flexDirection: "row",
    border: "1px solid grey", borderRadius: 16,
    },
    image: {
    width: 50, height: 50, borderRadius: 25,
    },
    contentContainer: {
    marginLeft: 8, display: "flex",
    flexDirection: "column", justifyContent: "center",
    },
    nameText: {
    color: "black", fontSize: 16,
    fontWeight: "bold",
    },
    commentText: {
    color: "black", fontSize: 16,
    },
}
    
function Comment({name, comment}) {
    return (
        <div style={styles.wrapper}>
            <div>
                <img src="http://ggoreb.com/images/Portrait_Placeholder.png"
                    style={styles.image}></img>
            </div>
            <div style={styles.contentContainer}>
                <span style={styles.nameText}>{name}</span>
                <span style={styles.commentText}>{comment}</span>
            </div>
        </div>
    );
}

export default Comment;
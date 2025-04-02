import Comment from './Comment';

function CommentList(props) {
    // comment 값 배열로 전달하기
    const comments = [
        {name: 'Mike', comment:'안녕하세요'},
        {name:'정모경', comment:'오늘도 파이팅!'},
        {name:'정여경', comment:'집에 간당😎'}
    ];
    return (
        <div>
            {/* 이러면 return 값이 여러개가 되므로 div로 감싸기 */}
            {/* comments가 객체 배열이므로 각 요소에 접근 */}
            {
                comments.map((v,i) => {
                    return (
                        <Comment name={v.name} comment={v.comment}></Comment>
                    )
                })
            }
        </div>
    );
}

export default CommentList;
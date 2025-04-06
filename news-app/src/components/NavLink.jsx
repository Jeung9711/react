import Category from "./Category";

const categories = [
    {name : 'all', text : '전체보기'},
    {name : 'business', text: '비즈니스'},
    {name : 'science', text: '과학'},
    {name : 'entertainment', text: '연예'},
    {name : 'spoprts', text: '스포츠' },
    {name : 'health', text: '건강'},
    {name : 'technology', text: '과학'}
]

const NavLink = ({ categories, onSelect }) => {

    return(
        <div>
            {categories.map((categories) => {
                <Category key={categories.name}
                    onClick={()=> onSelect(categories.name)}> {categories.text} </Category>
            })}
        </div>
    );
}

export default NavLink;
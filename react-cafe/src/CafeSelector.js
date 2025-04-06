function CafeSelector({ selectCafe, setSelectCafe }) {
    return(
        <div>
            {CafeSelector.map((cafe)=>{
                <img
                    key={cafe.name}
                    src={cafe.logo}
                    alt={cafe.name}
                ></img>
            })}
        </div>
    );
}

export default CafeSelector;
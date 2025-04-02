
function Footer(props) {
    const [active, setActive] = useState(false);

    const handleClick = (e, active) => {
        if(active == true) {
            e.target.style.backgroundColor = '';
            e.target.style.textDecoration = 'none';
        } else {
            e.target.style.backgroundColor = 'beige';
            e.target.style.textDecoration = 'underline';
            setActive(!active);
        }
    };
    return (
        <footer>
            {
                props.footers.map((v, i) => {
                    return (
                        <h5 key={i} onClick={handleClick}>{v}</h5>
                    );
                })
            }
        </footer>
    );
}

export default Footer;
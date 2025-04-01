function Section(props) {
    return (
        <section>
            {
                props.sections.map((v,i) => {
                    return(
                        <h4 key='i'>{v}</h4>
                    );
                })
            }
        </section>
    );
}

export default Section;
export default function Section(props){
    const { title, content } = props;
    return(
        <section>
            <h2>{title}</h2>
            <p>
                {content}
            </p>
        </section>
    )
}
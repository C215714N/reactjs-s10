export default function Section(props){
    const { title, content, className } = props;
    return(
        <section className="card">
            <h2 className="card-header">{title}</h2>
            <div className={"card-body " + className}>
                { content }
            </div>
        </section>
    )
}
export const Card = ({data}) => 
<article id={data.id} className="card">
    <header className="card-header">
        <img src={data.images ? data.images.fixed_height_small.webp : "logo.svg"} alt={data.title} />
        <h3 className="card-title">{data.title}</h3>
    </header>
    <div className="card-body">
        <p>{ data.username === "" ? "Anonymous" : data.username}</p>
    </div>
    <footer className="card-footer d-flex gap-1">
        <button><i className="fa fa-heart"></i></button>
        <button><i className="fa fa-thumbs-up"></i></button>
        <button><i className="fa fa-floppy-disk"></i></button>
    </footer>
</article>
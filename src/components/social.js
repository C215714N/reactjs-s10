const Social = (props) => props.links.map( (link, i) => 
    <a key={i} href={link.link} className={link.class}></a>
)
export default Social;
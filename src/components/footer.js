import Social from './social';

export default function Footer(props){
    const date = new Date();
    return(
        <>
            <Social links={props.links} />
            <p>&copy;{date.getFullYear()} Todos los derechos reservados</p>
        </>
    )
}
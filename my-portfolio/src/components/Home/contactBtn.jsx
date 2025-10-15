export default function ContactBtn({link, src}) {
    return (
        <>
            <a
            href={link} 
            target="_blank"
            className="transition-transform duration-300 hover:scale-110">
                <img className="size-11 linkeff" src={src}/>
            </a>
        </>
    )
        
}
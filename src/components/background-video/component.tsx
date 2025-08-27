import { BackgroundVideoContent } from "./styles";


interface BackgroundVideoPorps {
    src: string
}

export default function BackgroundVideo ({src} : BackgroundVideoPorps) {

    return <BackgroundVideoContent autoPlay loop muted playsInline  src={src}/>
}
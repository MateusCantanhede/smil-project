import React from 'react';

const render = (name, src, alt, beg, dur, kds) => {
    switch (name) {
        case 'img':

            return (
                <div className="media-player">
                    <img
                        id="img"
                        className="image-grid"
                        style={{ animation:dur ? `hiddenAfter 0.5s ease-in ${dur} forwards` : "none", border: '2px solid #000',animationDelay:beg}}
                        src={'assets/' + src}
                        alt={alt} />
                </div>
            )
        case 'video':
            return (
                <div className="media-player">
                    <video
                        id="vid"
                        className="video-grid"
                        style={{ animation: dur ? `hiddenAfter 0.5s ease-in ${dur} forwards` : "none", border: '2px solid #000',animationDelay:beg}}
                        autoPlay
                        controls
                    >
                        <source src={'assets/' + src} type="video/mp4" />
                    </video>
                </div>
            )
        case 'body':
        case 'seq':
            return (
                <div className="player-container">
                    <div className="seq">

                        {kds.map((media, i) => {
                            return (
                                <Player
                                    i={i}
                                    name={media.name}
                                    src={media.attrib.src}
                                    alt={media.attrib.alt}
                                    beg = {media.attrib.begin}
                                    dur={media.attrib.dur}
                                    kds={media.kds} />
                            )
                        })}
                    </div>
                </div>
            );

        case 'par':
            return (
                <div className="player-container">
                    <div className="row">
                        {kds.reverse().map((media, i) => {
                            return (
                                <Player
                                    i={i}
                                    name={media.name}
                                    src={media.attrib.src}
                                    alt={media.attrib.alt}
                                    beg = {media.attrib.begin}
                                    dur={media.attrib.dur}
                                    kds={media.kds} />
                            )
                        })}
                    </div>
                </div>
            );

        case 'head':
            return (
                <>
                    {kds.map((media, i) => {
                        return (
                            <Player
                                i={i}
                                name={media.name}
                                src={media.attrib.src}
                                alt={media.attrib.alt}
                                beg = {media.attrib.begin}
                                dur={media.attrib.dur}
                                kds={media.kds} />
                        )
                    })}
                </>
            );

        case 'smil':
            return (
                <>
                    {kds.map((media, i) => {
                        return (
                            <Player
                                i={i}
                                name={media.name}
                                src={media.attrib.src}
                                alt={media.attrib.alt}
                                beg = {media.attrib.begin}
                                dur={media.attrib.dur}
                                kds={media.kds} />
                        )
                    })}
                </>
            );
        default:
            return (
                <p>not renderElement</p>
            )
    }
}
const Player = ({ name, src, alt, beg ,dur, kds }) => {
    return (
        <>
            {render(name, src, alt, beg , dur, kds)}
        </>
    )
}
export default Player
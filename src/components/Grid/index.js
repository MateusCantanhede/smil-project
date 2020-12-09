import React from 'react';
import { useLocation } from 'react-router-dom';
import Player from '../Player';


const Tree = (node, parent, root) => {
    if (node.length > 0) {
        for (let i in node) {
            const SmilNode = {
                name: node[i].name,
                parent: parent,
                attrib: node[i].attributes,
                kds: []
            }
            root.push(SmilNode)
            Tree(node[i].children, SmilNode.name, SmilNode.kds)
        }
    }
}
const ParseCode = (code) => {
    const xmlParser = require('react-xml-parser')
    const xml = new xmlParser().parseFromString(code)
    const root = []
    Tree(xml.children, xml.name, root)
    return root
}
const Grid = () => {
    const params = new URLSearchParams(useLocation().search)
    const code = params.get('smil-area')
    const arrayInfos = ParseCode(code)
    return (
        <>
            <img src={'logo.png'} alt="Ovelha bigode" className="logo" />
            <div className="grid-map">
                {arrayInfos.map(
                    (media, i) => (
                        <Player
                            i={i}
                            name={media.name}
                            src={media.attrib.src}
                            alt={media.attrib.alt}
                            beg = {media.attrib.begin}
                            dur={media.attrib.dur}
                            kds={media.kds}
                        />
                    )
                )}
            </div>
        </>
    )
}
export default Grid
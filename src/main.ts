import { Resvg } from "@resvg/resvg-js"
import { getHighlighter } from "shiki"
import { getSVGRenderer } from "shiki-renderer-svg"

import { GraphiteOptions } from '.'


export default class Graphite {
    private SVG:Promise<string>
    constructor(
        private readonly code:string,
        private readonly lang:string,
        private readonly theme?:string,
        private readonly options?:GraphiteOptions
    ){
        this.SVG = getHighlighter({theme:this.theme?this.theme:"github-dark"}).then(hl=>{
            const token = hl.codeToThemedTokens(this.code,this.lang)
            return getSVGRenderer({
                fontFamily: "Fira Code, Consolas, 'Courier New', monospace",
        }).then(svg=>svg.renderToSVG(token, {bg:"#000"}))})
    }
    async svg(){
       return await this.SVG

    }

    async png(){
        const svg = await this.SVG
        const resvg = new Resvg(svg)
        const svgData = resvg.render()
        const pngBuffer = svgData.asPng()
        return pngBuffer
       
    }

    async base64(){
        const svg = await this.SVG
        const resvg = new Resvg(svg)
        const svgData = resvg.render()
        const base64 = svgData.asPng().toString("base64")
        return base64
    }
}

import { ElementNode, parse as svgParser } from 'svg-parser'

/**
 * Creates AST object from SVG string
 */
export function parse(svgString: string) {
    const parsed = svgParser(svgString)
    return parsed.children[0] as ElementNode
}

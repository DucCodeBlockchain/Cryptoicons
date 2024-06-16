import { isString, camelCase } from 'lodash'
import { ElementNode } from 'svg-parser'

/**
 * Stringify styles
 */
function stringifyStyle(style: string) {
    const [attribute, value] = style.split(':')
    return `${camelCase(attribute)}: '${value}'`
}

/**
 * Creates SVG property strings with = instead of :
 */
export function stringifyAttributes(
    attributes: Record<string, string | number>
) {
    const attributeNames = Object.keys(attributes)

    return attributeNames.reduce((accumulator, attributeName) => {
        const attribute = attributes[attributeName]
        const isStyleAttribute = attributeName === 'style'

        if (isStyleAttribute)
            return `${accumulator} ${attributeName}={{ ${stringifyStyle(
                attribute as string
            )} }}`

        return `${accumulator} ${attributeName}="${attribute}"`
    }, String())
}

/**
 * Stringify the svg children elements into a ReactFragment
 */
export function stringify(node: ElementNode): string {
    if (isString(node)) return node

    const isSvgRoot = node.tagName === 'svg'
    const tagName = isSvgRoot ? '' : node.tagName
    const properties = isSvgRoot ? '' : stringifyAttributes(node.properties!)
    const buffer = `<${tagName}${properties}>`

    const childrensBuffer = node.children.reduce(
        (accumulator: string, childrenNode: any) => {
            return accumulator + stringify(childrenNode)
        },
        buffer
    )

    return childrensBuffer + `</${tagName}>`
}

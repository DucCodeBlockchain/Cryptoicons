import { ElementNode } from 'svg-parser'

/**
 * Process badge icon background shape fill and omit it from node
 */
export function badger(node: ElementNode, fileName: string) {
    let rectFill = ''
    let children = node.children as ElementNode[]

    if (fileName.includes('Badge')) {
        children = children.reduce(
            (accumulator: ElementNode[], child: ElementNode, index: number) => {
                const childClone = { ...child }

                const isValidBackgroundShapeElement =
                    index === 0 &&
                    childClone.tagName === 'rect' &&
                    childClone.properties?.fill

                if (isValidBackgroundShapeElement) {
                    rectFill = String(childClone.properties!.fill)
                    return [...accumulator] // Intentionally return without child
                }

                return [...accumulator, childClone]
            },
            []
        )
    }

    return {
        rectFill,
        element: {
            ...node,
            children,
        },
    }
}

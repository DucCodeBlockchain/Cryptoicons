import { camelCase, isString } from 'lodash'
import { ElementNode } from 'svg-parser'

/**
 * Formats all SVG property keys to camelCase instead of kebab-case
 */
export function transform(node: ElementNode | string): ElementNode {
  if (isString(node)) return node as unknown as ElementNode

  const propertyNames = Object.keys(node.properties!)

  const properties = propertyNames.reduce((accumulator, propertyName) => {
    const property = node.properties![propertyName]

    return {
      ...accumulator,
      [camelCase(propertyName)]: property,
    }
  }, {})

  const children = (node.children as ElementNode[]).map((child) =>
    transform(child)
  )

  return {
    ...node,
    children,
    properties,
  }
}

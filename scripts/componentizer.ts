/**
 * Creates an Icon component definition as a template literal based on icon name
 */
export function componentize(
    svgFragment: string,
    iconName: string,
    rectFill?: string
) {
    const rectProperty = rectFill ? `rectFill: '${rectFill}',` : ''

    return `
      import React from 'react'
      import { createIcon } from '../createIcon'

      export const ${iconName} = createIcon({
        ${rectProperty}
        path: (${svgFragment})
      })
`
}

import React, { forwardRef } from 'react'

export interface IconProps extends React.SVGAttributes<SVGElement> {
    /**
     * Proportionally sets the width and height of the SVG element.
     * Explicit height and width will take precedence.
     * Defaults to 24.
     */
    size?: string | number
    /**
     * Sets the radius of the background shape in Badge icons.
     * Has no effect on logo icons. Defaults to 8.
     */
    badgeRadius?: number
}

export const Icon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
    const { size = 24, badgeRadius, children, height, width, ...rest } = props

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            height={height ?? size}
            width={width ?? size}
            focusable={false}
            ref={ref}
            aria-hidden
            {...rest}
        >
            {children}
        </svg>
    )
})

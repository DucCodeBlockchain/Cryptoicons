import React, { forwardRef } from 'react'
import * as icons from './components'
import { IconProps } from './Icon'
import { CryptoconNames } from './types'

export interface CryptoconProps extends IconProps {
    icon: CryptoconNames
}

export const Cryptocon = forwardRef<SVGSVGElement, CryptoconProps>(
    (props, ref) => {
        const { icon, ...rest } = props
        const Icon = icons[icon]

        return <Icon {...rest} ref={ref} />
    }
)

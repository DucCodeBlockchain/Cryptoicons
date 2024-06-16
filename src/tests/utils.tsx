import React from 'react'
import * as cryptocons from '../components'
import { Cryptocon } from '../Cryptocon'
import { CryptoconBadge } from '../CryptoconBadge'
import { CryptoconLogo } from '../CryptoconLogo'
import { IconProps } from '../Icon'
import { BadgeNames, CryptoconNames, LogoNames } from '../types'

export const iconNames = Object.keys(cryptocons) as CryptoconNames[]

export const logoNames = iconNames.filter(
    (name) => !name.includes('Badge')
) as LogoNames[]

export const badgeNames = iconNames.filter((name) =>
    name.includes('Badge')
) as BadgeNames[]

const testProps = <Type,>(iconName: Type) => ({
    key: iconName,
    icon: iconName,
    ['data-test-name']: iconName,
    ['data-testid']: 'cryptocon',
})

export const CryptoconLibrary = (props: IconProps) => (
    <>
        {iconNames.map((iconName) => (
            <Cryptocon {...testProps(iconName)} {...props} />
        ))}
    </>
)

export const CryptoconBadgeLibrary = (props: IconProps) => (
    <>
        {badgeNames.map((iconName) => (
            <CryptoconBadge {...testProps(iconName)} {...props} />
        ))}
    </>
)

export const CryptoconLogoLibrary = (props: IconProps) => (
    <>
        {logoNames.map((iconName) => (
            <CryptoconLogo {...testProps(iconName)} {...props} />
        ))}
    </>
)

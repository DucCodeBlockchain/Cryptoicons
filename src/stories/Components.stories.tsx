import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { Cryptocon, CryptoconBadge, CryptoconLogo } from '../'
import { badgeNames, logoNames } from '../tests/utils'

export default {
    title: 'Components',
} as ComponentMeta<typeof CryptoconLogo>

export const Badge: ComponentStory<typeof CryptoconBadge> = (args) => (
    <CryptoconBadge {...args} />
)

Badge.argTypes = {
    icon: {
        options: badgeNames,
        control: {
            type: 'select',
        },
    },
}

Badge.args = { icon: 'BinanceBadge', size: 48, badgeRadius: 12 }

export const Logo: ComponentStory<typeof CryptoconLogo> = (args) => (
    <CryptoconLogo {...args} />
)

Logo.argTypes = {
    icon: {
        options: logoNames,
        control: {
            type: 'select',
        },
    },
}

Logo.args = { icon: 'Binance', size: 48 }

export const Cryptocons: ComponentStory<typeof Cryptocon> = (args) => (
    <Cryptocon {...args} />
)

Cryptocons.args = { icon: 'Binance', size: 48, badgeRadius: 12 }

Cryptocons.argTypes = {
    icon: {
        options: [...badgeNames, ...logoNames].sort(),
        control: {
            type: 'select',
        },
    },
}

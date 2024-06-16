import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import {
    badgeNames,
    CryptoconBadgeLibrary,
    CryptoconLibrary,
    CryptoconLogoLibrary,
    iconNames,
    logoNames,
} from './utils'

describe('Basic functionality', () => {
    it('Renders all Cryptocon components', () => {
        render(<CryptoconLibrary />)

        expect(screen.queryAllByTestId('cryptocon')).toHaveLength(
            iconNames.length
        )
    })

    it('Renders all Logo components', () => {
        render(<CryptoconLogoLibrary />)
        expect(screen.queryAllByTestId('cryptocon')).toHaveLength(
            logoNames.length
        )
    })

    it('Renders all Badge components', () => {
        render(<CryptoconBadgeLibrary />)
        expect(screen.queryAllByTestId('cryptocon')).toHaveLength(
            badgeNames.length
        )
    })
})

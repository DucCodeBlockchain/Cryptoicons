import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { CryptoconBadgeLibrary } from './utils'

describe('Badge icons', () => {
    it('have valid background shape', () => {
        const { rerender } = render(<CryptoconBadgeLibrary />)
        const cryptocons = screen.queryAllByTestId('cryptocon')

        cryptocons.forEach((cryptocon) => {
            try {
                expect(cryptocon.firstElementChild).toHaveAttribute('rx', '8')
            } catch (error) {
                const name =
                    cryptocon.getAttribute('data-test-name') ??
                    'No component name'

                throw new Error(
                    `Doesn't have a valid background shape: ${name}`
                )
            }
        })

        rerender(<CryptoconBadgeLibrary badgeRadius={40} />)

        cryptocons.forEach((cryptocon) => {
            expect(cryptocon.firstElementChild).toHaveAttribute('rx', '40')
        })
    })
})

import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { CryptoconLibrary } from './utils'

describe('Icon size', () => {
    it('can change between number and string', () => {
        const { rerender } = render(<CryptoconLibrary />)
        const cryptocons = screen.queryAllByTestId('cryptocon')

        cryptocons.forEach((cryptocon) => {
            expect(cryptocon).toHaveAttribute('height', '24')
            expect(cryptocon).toHaveAttribute('width', '24')
        })

        rerender(<CryptoconLibrary size={48} />)

        cryptocons.forEach((cryptocon) => {
            expect(cryptocon).toHaveAttribute('height', '48')
            expect(cryptocon).toHaveAttribute('width', '48')
        })

        rerender(<CryptoconLibrary height="60px" width="60px" />)

        cryptocons.forEach((cryptocon) => {
            expect(cryptocon).toHaveAttribute('height', '60px')
            expect(cryptocon).toHaveAttribute('width', '60px')
        })
    })
})

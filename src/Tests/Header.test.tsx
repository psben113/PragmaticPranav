import { describe, expect, it } from 'vitest'
import { render, screen } from "@testing-library/react"

import Header from '../Components/Header'

describe('Header tests', () => {
    it('Should render header with navigation links', () => {
        render(<Header />)
        expect(screen.getByText('Experience')).toBeInTheDocument();
        expect(screen.getByText('Projects')).toBeInTheDocument();
        expect(screen.getByText('Skills')).toBeInTheDocument();
        expect(screen.getByText('Contact')).toBeInTheDocument();
    })

    it('Should render the logo', () => {
        render(<Header />)
        expect(screen.getByText('PB')).toBeInTheDocument();
    })
})

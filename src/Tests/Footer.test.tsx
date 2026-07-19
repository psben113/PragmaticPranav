import { describe, expect, it } from 'vitest'
import { render, screen } from "@testing-library/react"

import Footer from '../Components/Footer'

describe('Footer tests', () => {
    it('Should render contact section', () => {
        render(<Footer />)
        expect(screen.getByText('Get In Touch')).toBeInTheDocument();
        expect(screen.getByText('prnvswrp@gmail.com')).toBeInTheDocument();
        expect(screen.getByText('LinkedIn')).toBeInTheDocument();
    })
})

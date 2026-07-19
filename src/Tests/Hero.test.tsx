import { describe, expect, it } from 'vitest'
import { render, screen } from "@testing-library/react"

import Hero from '../Components/Hero'

describe('Hero tests', () => {
    it('Should render name and title', () => {
        render(<Hero />)
        expect(screen.getByText('Pranav Swaroop Bennabhaktula')).toBeInTheDocument();
        expect(screen.getByText('Software Developer')).toBeInTheDocument();
    })

    it('Should render contact links', () => {
        render(<Hero />)
        expect(screen.getByText('prnvswrp@gmail.com')).toBeInTheDocument();
        expect(screen.getByText('LinkedIn')).toBeInTheDocument();
    })

    it('Should render call to action buttons', () => {
        render(<Hero />)
        expect(screen.getByText('View My Work')).toBeInTheDocument();
        expect(screen.getByText('Get In Touch')).toBeInTheDocument();
    })
})

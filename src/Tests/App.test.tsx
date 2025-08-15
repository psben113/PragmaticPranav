import { describe, expect, it } from 'vitest'
import { render, screen } from "@testing-library/react"

import Landing from '../Components/Landing'

describe('First tests', () => {
    it('Should render component', () => {
        render(<Landing />)
        const linkElement = screen.getByText(/Landing/i);
        expect(linkElement).toBeInTheDocument();
    })
})
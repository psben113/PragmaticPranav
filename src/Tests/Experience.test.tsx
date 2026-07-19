import { describe, expect, it } from 'vitest'
import { render, screen } from "@testing-library/react"

import Experience from '../Components/Experience'

describe('Experience tests', () => {
    it('Should render all three positions', () => {
        render(<Experience />)
        expect(screen.getByText('Senior Associate Quality Engineer')).toBeInTheDocument();
        expect(screen.getByText('Systems Engineer')).toBeInTheDocument();
        expect(screen.getByText('Full Stack Developer')).toBeInTheDocument();
    })

    it('Should render company names', () => {
        render(<Experience />)
        expect(screen.getByText(/MathWorks/)).toBeInTheDocument();
        expect(screen.getByText(/Charter Communications/)).toBeInTheDocument();
        expect(screen.getByText(/Showingly/)).toBeInTheDocument();
    })
})

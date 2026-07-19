import { describe, expect, it } from 'vitest'
import { render, screen } from "@testing-library/react"

import Skills from '../Components/Skills'

describe('Skills tests', () => {
    it('Should render skill categories', () => {
        render(<Skills />)
        expect(screen.getByText('Languages')).toBeInTheDocument();
        expect(screen.getByText('Frontend')).toBeInTheDocument();
        expect(screen.getByText('Backend & Data')).toBeInTheDocument();
        expect(screen.getByText('Tools & Platforms')).toBeInTheDocument();
    })

    it('Should render education', () => {
        render(<Skills />)
        expect(screen.getByText('B.S. in Computer Science')).toBeInTheDocument();
        expect(screen.getByText(/Colorado State University/)).toBeInTheDocument();
    })
})

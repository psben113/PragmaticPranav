import { describe, expect, it } from 'vitest'
import { render, screen } from "@testing-library/react"

import Header from '../Components/Header'

describe('Header tests', () => {
    it('Should render header with 3 buttons', () => {
        render(<Header />)
        const projectsButton = screen.getByText(/Projects/);
        const skillsButton = screen.getByText(/Skills/);
        const aboutMeButton = screen.getByText(/About Me/);
        expect(projectsButton).toBeInTheDocument();
        expect(skillsButton).toBeInTheDocument();
        expect(aboutMeButton).toBeInTheDocument();
    })
})
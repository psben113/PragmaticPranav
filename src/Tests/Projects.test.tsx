import { describe, expect, it } from 'vitest'
import { render, screen } from "@testing-library/react"

import Projects from '../Components/Projects'

describe('Projects tests', () => {
    it('Should render project titles', () => {
        render(<Projects />)
        expect(screen.getByText('Simulink Targeted Randomizer')).toBeInTheDocument();
        expect(screen.getByText('Maze Game')).toBeInTheDocument();
    })
})

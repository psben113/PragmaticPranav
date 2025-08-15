import { afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom' //Import all testing functionality from jest-dom

afterEach(() => {
    cleanup();
    vi.clearAllMocks()
})

import '../Styles/Projects.css';

type Project = {
    title: string;
    org: string;
    status: string;
    description: string;
    highlights: string[];
    link?: string;
    logo?: string;
};

const projects: Project[] = [
    {
        title: 'Judgy Calculator',
        org: 'Chrome Extension',
        status: 'Open Source',
        description:
            'A calculator that lives in your toolbar. Blue sky, drifting clouds, critters crossing the grass, and a sun that watches what you type. Use it for real math and all is peaceful. Use it for 5 × 5 and the sun laughs at you, mocks you in a speech bubble, and the whole world briefly falls into night.',
        highlights: [
            'Sun reacts to your math — mocks trivial operations, praises serious ones',
            'Built with React 19 + TypeScript + Vite (Manifest V3, no permissions, no eval)',
            'Full test suite: unit, property, component, and E2E tests against real headless Chrome',
        ],
        logo: '/judgy-calculator.png',
    },
    {
        title: 'SimpleRAG',
        org: 'Personal Project',
        status: 'Open Source',
        description:
            'A Python implementation of Retrieval-Augmented Generation for querying personal documents locally. Built with LangGraph orchestration, a Chroma vector database, and Google Gemini for embeddings and generation — answers come straight from your own PDFs, text, and markdown rather than the model\'s training data.',
        highlights: [
            'Two-phase pipeline: one-time document ingestion + interactive query loop',
            'LangGraph routes questions through retrieve and generate nodes with source attribution',
            'Tracer records token usage and latency metrics to JSON for every run',
        ],
        link: 'https://github.com/psben113/simpleRAG',
    },
    {
        title: 'Maze Game',
        org: 'Personal Project',
        status: 'May 2021',
        description:
            'A PC game built in C# with Unity featuring immersive music and sound effects. Generates random mazes based on 2D arrays with start and destination goals.',
        highlights: [
            'Built with C# and Unity',
            'Procedurally generated maze levels',
            'Research project studying allocentric vs. egocentric perspectives',
        ],
    },
];

function Projects() {
    return (
        <section id="projects" className="projects">
            <div className="projectsContainer container">
                <h2 className="sectionTitle">Projects</h2>
                <div className="projectsGrid">
                    {projects.map((project, index) => (
                        <div className="projectCard" key={index}>
                            {project.logo && (
                                <div
                                    className="projectCardBg"
                                    style={{ backgroundImage: `url(${project.logo})` }}
                                />
                            )}
                            <div className="projectCardHeader">
                                <h3 className="projectName">{project.title}</h3>
                                <span className="projectStatus">{project.status}</span>
                            </div>
                            <p className="projectOrg">{project.org}</p>
                            <p className="projectDescription">{project.description}</p>
                            <ul className="projectHighlights">
                                {project.highlights.map((h, i) => (
                                    <li key={i}>{h}</li>
                                ))}
                            </ul>
                            {project.link && (
                                <a
                                    href={project.link}
                                    className="projectLink"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View on GitHub →
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;

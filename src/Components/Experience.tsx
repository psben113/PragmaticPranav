import { useState, type CSSProperties } from 'react';
import '../Styles/Experience.css';

type Experience = {
    title: string;
    company: string;
    location: string;
    period: string;
    bullets: string[];
    logo: string;
    color: string;
};

const experiences: Experience[] = [
    {
        title: 'Senior Associate Quality Engineer',
        company: 'MathWorks',
        location: 'Natick, MA',
        period: 'May 2022 – Present',
        bullets: [
            'Developed an autoscheduler to enhance the performance of the Convolution and NPSS Blocks in Simulink, achieving a 20% improvement in loop nest execution speed by leveraging CGIR and MLIR models.',
            'Continued maintenance of Embedded Coder products by ensuring robust features are shipped to high profile clients like NASA and Bose.',
            'Leveraged MATLAB and Simulink to create a tool for fuzz testing. This tool can create thousands of Simulink models with different semantics for better test coverage.',
            'Mentored an intern for 2 release cycles and shipped a feature to enhance Embedded Coder.',
        ],
        logo: 'https://img.logo.dev/mathworks.com?token=live_6a1a28fd-6420-4492-aeb0-b297461d9de2&size=128&retina=true&format=png&theme=dark',
        color: '#E37222',
    },
    {
        title: 'Systems Engineer',
        company: 'Charter Communications',
        location: 'Greenwood Village, CO',
        period: 'October 2021 – May 2022',
        bullets: [
            'Designed access control lists for hub routers at 10 new locations where Charter Communications expanded their network.',
            'Configured and deployed 20 Sandvine policy traffic switches at various locations across the US to combat piracy activity on Charter networks.',
        ],
        logo: 'https://img.logo.dev/spectrum.com?token=live_6a1a28fd-6420-4492-aeb0-b297461d9de2&size=128&retina=true&format=png&theme=dark',
        color: '#003B71',
    },
    {
        title: 'Full Stack Developer',
        company: 'Showingly',
        location: 'Denver, CO',
        period: 'October 2020 – October 2021',
        bullets: [
            'Senior developer for 2 web applications utilizing a MERN stack; seamlessly incorporated AWS Lambda functions for backend operations.',
            'Gained expertise in Redux DevTools to debug application state changes.',
            'Mentored 2 other engineers and guided them to build several web pages for Showingly products.',
        ],
        logo: 'https://img.logo.dev/showingly.com?token=live_6a1a28fd-6420-4492-aeb0-b297461d9de2&size=128&retina=true&format=png&theme=dark',
        color: '#FF6B6B',
    },
];

function CompanyLogo({ src, name, color }: { src: string; name: string; color: string }) {
    const [errored, setErrored] = useState(false);

    if (errored) {
        return (
            <div className="companyLogoFallback" style={{ background: color }}>
                {name[0]}
            </div>
        );
    }

    return (
        <img
            src={src}
            alt={`${name} logo`}
            className="companyLogo"
            onError={() => setErrored(true)}
        />
    );
}

function Experience() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggle = (index: number) =>
        setActiveIndex(prev => (prev === index ? null : index));

    return (
        <section id="experience" className="experience">
            <div className="experienceContainer container">
                <h2 className="sectionTitle">Experience</h2>
                <div className="timeline">
                    {experiences.map((exp, index) => {
                        const isActive = activeIndex === index;
                        return (
                            <div
                                key={index}
                                className="timelineItem"
                                style={{ '--brand': exp.color } as CSSProperties}
                                onClick={() => toggle(index)}
                            >
                                <div className={`timelineDot${isActive ? ' active' : ''}`} />
                                <div className={`timelineCard${isActive ? ' active' : ''}`}>
                                    <div className="timelineHeader">
                                        <div className="timelineHeaderLeft">
                                            <CompanyLogo
                                                src={exp.logo}
                                                name={exp.company}
                                                color={exp.color}
                                            />
                                            <div>
                                                <h3 className="timelineRole">{exp.title}</h3>
                                                <p className="timelineCompany">
                                                    {exp.company}{' '}
                                                    <span className="timelineLocation">· {exp.location}</span>
                                                </p>
                                            </div>
                                        </div>
                                        <span className="timelinePeriod">{exp.period}</span>
                                    </div>
                                    <ul className="timelineBullets">
                                        {exp.bullets.map((bullet, i) => (
                                            <li key={i}>{bullet}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Experience;

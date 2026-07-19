import '../Styles/Skills.css';

const skillCategories = [
    {
        category: 'Languages',
        skills: ['Python', 'JavaScript', 'TypeScript', 'C/C++', 'Java', 'C#', 'SQL'],
    },
    {
        category: 'Frontend',
        skills: ['ReactJS', 'Redux', 'HTML/CSS', 'Unity'],
    },
    {
        category: 'Backend & Data',
        skills: ['Node.js', 'MongoDB', 'AWS Lambda', 'MERN Stack'],
    },
    {
        category: 'Tools & Platforms',
        skills: ['MATLAB', 'Simulink', 'CGIR', 'MLIR', 'Git'],
    },
];

function Skills() {
    return (
        <section id="skills" className="skills">
            <div className="skillsContainer container">
                <h2 className="sectionTitle">Skills</h2>
                <div className="skillsGrid">
                    {skillCategories.map((cat, index) => (
                        <div className="skillCategory" key={index}>
                            <h3 className="skillCategoryTitle">{cat.category}</h3>
                            <div className="skillTags">
                                {cat.skills.map((skill, i) => (
                                    <span className="skillTag" key={i}>{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="educationBlock">
                    <h3 className="skillCategoryTitle">Education</h3>
                    <div className="educationContent">
                        <img
                            src="https://brand.colostate.edu/wp-content/uploads/sites/47/2025/02/CSU-Symbol-r-Rev.png"
                            alt="Colorado State University"
                            className="educationLogo"
                        />
                        <div>
                            <p className="educationDegree">B.S. in Computer Science</p>
                            <p className="educationSchool">Colorado State University, Fort Collins, CO — December 2020</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;

import { useEffect, useState } from 'react';
import { EmailLink } from './EmailLink';
import '../Styles/Hero.css';

const SCRAMBLE_CHARS = 'X0123456789!@#$%&*<>[]';

const TITLES = [
    ' a Software Engineer',
    ' a Mathematician',
    ' a Full-Stack Developer',
    ' a Tinkerer',
];

function useConsoleText(words: string[], speed = 60) {
    const [display, setDisplay] = useState('');

    useEffect(() => {
        let letterCount = 1;
        let direction = 1;
        let wordIdx = 0;
        let waiting = false;

        const id = setInterval(() => {
            if (waiting) return;
            const word = words[wordIdx];

            if (letterCount === 0) {
                waiting = true;
                setTimeout(() => {
                    wordIdx = (wordIdx + 1) % words.length;
                    direction = 1;
                    letterCount = 1;
                    waiting = false;
                }, 800);
            } else if (letterCount === word.length + 1) {
                waiting = true;
                setTimeout(() => {
                    direction = -1;
                    letterCount += direction;
                    waiting = false;
                }, 1500);
            } else {
                setDisplay(word.substring(0, letterCount));
                letterCount += direction;
            }
        }, speed);

        return () => clearInterval(id);
    }, [words, speed]);

    return display;
}

function useScramble(text: string, duration = 700) {
    const [output, setOutput] = useState('');

    useEffect(() => {
        let cancelled = false;
        let frame = 0;
        const totalFrames = 6;
        let glitchTimeout: ReturnType<typeof setTimeout>;
        let glitchInterval: ReturnType<typeof setInterval>;

        const randomChar = () => SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];

        const scheduleGlitch = () => {
            glitchTimeout = setTimeout(() => {
                if (cancelled) return;
                let flashes = 0;
                const flashCount = 2 + Math.floor(Math.random() * 2);
                glitchInterval = setInterval(() => {
                    if (cancelled) { clearInterval(glitchInterval); return; }
                    flashes++;
                    if (flashes % 2 === 1) {
                        setOutput(text.split('').map(ch =>
                            ch !== ' ' && Math.random() < 0.2 ? randomChar() : ch
                        ).join(''));
                    } else {
                        setOutput(text);
                    }
                    if (flashes >= flashCount * 2) {
                        clearInterval(glitchInterval);
                        setOutput(text);
                        scheduleGlitch();
                    }
                }, 60);
            }, 3000 + Math.random() * 3000);
        };

        const scrambleId = setInterval(() => {
            if (cancelled) { clearInterval(scrambleId); return; }
            frame++;
            const unlocked = Math.floor((frame / totalFrames) * text.length);
            setOutput(
                text.split('').map((ch, i) => {
                    if (ch === ' ') return ' ';
                    if (i < unlocked) return ch;
                    return randomChar();
                }).join('')
            );
            if (frame >= totalFrames) {
                clearInterval(scrambleId);
                setOutput(text);
                scheduleGlitch();
            }
        }, duration / totalFrames);

        return () => {
            cancelled = true;
            clearInterval(scrambleId);
            clearInterval(glitchInterval);
            clearTimeout(glitchTimeout);
        };
    }, [text, duration]);

    return output;
}

const terminalLines = [
    { prompt: '$', cmd: 'whoami', out: 'pranav swaroop' },
    { prompt: '$', cmd: 'echo $STATUS', out: 'OPEN_TO_WORK=true' },
    { prompt: '$', cmd: 'cat skills.txt', out: 'ML · Compilers · Full-Stack' },
];

function Hero() {
    const scrambledName = useScramble('Pranav');
    const title = useConsoleText(TITLES);

    return (
        <section id="hero" className="heroSection">
            <div className="container heroContainer">
                <div className="heroLeft">
                    <h1 className="heroName">
                        <span className="heroGreeting">Hi, I'm </span>{scrambledName}
                    </h1>
                    <h2 className="heroTitle">a Pragmatic Software Developer</h2>
                    <div className="heroSummary">
                        <p>
                            I'm a software engineer specializing in test automation, compiler toolchains,
                            and full-stack development. Currently shipping quality engineering solutions
                            for Simulink and Embedded Coder at MathWorks. (Yes, I test the testing tools.)
                        </p>
                        <p>
                            Always hunting for the next challenge. If you have an opportunity or just
                            want to say hi, reach out. I reply fast. Unlike my CI pipeline.
                        </p>
                    </div>
                    <div className="heroLinks">
                        <EmailLink className="heroLink">Email Me</EmailLink>
                        <span className="heroDivider">|</span>
                        <a
                            href="https://www.linkedin.com/in/pranavswaroopb"
                            className="heroLink"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>
                    </div>
                    <div className="heroActions">
                        <a href="#experience" className="heroCta">View My Work</a>
                        <EmailLink className="heroCtaOutline">Get In Touch</EmailLink>
                    </div>
                </div>

                <div className="heroRight">
                    <img
                        src="https://avatarfiles.alphacoders.com/376/thumb-1920-376496.png"
                        alt="Profile avatar"
                        className="heroAvatar"
                    />
                    <div className="heroTerminal">
                        <div className="terminalBar">
                            <span className="termDot termRed" />
                            <span className="termDot termYellow" />
                            <span className="termDot termGreen" />
                            <span className="termTitle">~/pranav</span>
                        </div>
                        <div className="terminalBody">
                            {terminalLines.map((l, i) => (
                                <div key={i} className="termLine">
                                    <span className="termPrompt">{l.prompt}</span>
                                    <span className="termCmd"> {l.cmd}</span>
                                    <div className="termOut">{l.out}</div>
                                </div>
                            ))}
                            <div className="termLine">
                                <span className="termPrompt">$</span>
                                <span className="termCmd"> cat role.txt</span>
                                <div className="termOut">
                                    {title}<span className="heroCursor">_</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="heroBg" />
                </div>
            </div>
        </section>
    );
}

export default Hero;

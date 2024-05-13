import React, { useContext } from 'react';
import { HomepageContext } from '../../context/context';

export const Faq = () => {
    const { homepageState } = useContext(HomepageContext);

    return (
        <>
        <span className={`faq ${homepageState === 'faq' ? '' : 'hidden'}`}>
            <h3>What are the advantage of using react?</h3>
            <p>
                The advantages of using React lie in its component-based architecture, 
                which promotes reusability, modularity, and efficiency in building user interfaces. 
                Additionally, its virtual DOM implementation ensures optimal performance by minimizing 
                browser updates, while its thriving ecosystem offers a plethora of libraries and tools 
                for rapid development. Vue and Angular are also popular choices for frontend development.
            </p>
            <h3>What are the advantages of design systems?</h3>
            <p>
                Design systems offer a multitude of advantages, primarily streamlining the design and 
                development process by providing a centralized repository of reusable components, 
                patterns, and guidelines. They foster consistency across products, enhance collaboration 
                among teams, and ultimately result in more cohesive, user-friendly experiences.
            </p>
            <h3>What is Atomic Design?</h3>
            <p>
                Atomic design is a methodology for creating design systems that breaks down interfaces into smaller, 
                reusable components, starting from the smallest elements (atoms) and gradually assembling them into 
                larger components (molecules, organisms, templates, and pages). This approach promotes consistency, 
                scalability, and efficiency in design and development workflows.
            </p>
            <h3>What is storybook and how can it be combined with Atomic Design to create Design Systems?</h3>
            <p>
                Storybook is an open-source tool for developing UI components in isolation for React, Vue, Angular, 
                and other frontend frameworks. It provides a sandbox environment where developers can create and 
                showcase individual components independently of the main application, allowing for easier testing, 
                iteration, and collaboration. When used in conjunction with Atomic Design principles, Storybook becomes 
                the soures of truth for the design system.
            </p>

        </span>
        </>
        
    );
};

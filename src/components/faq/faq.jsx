import React, { useContext } from 'react';
import { HomepageContext } from '../../context/context';

export const Faq = () => {
    const { homepageState } = useContext(HomepageContext);

    return (
        <>
        <span className={`faq ${homepageState === 'faq' ? '' : 'hidden'}`}>
            <h3>Why react is my preferred framework?</h3>
            <p>
                React is my preferred framework because its component-based architecture aligns naturally with how I think about building scalable, maintainable user interfaces. By breaking complex experiences into reusable, well-encapsulated components, React enables faster development, clearer ownership, and long-term flexibility as applications evolve. Its virtual DOM efficiently manages updates, resulting in strong performance even in highly interactive, data-driven applications. Just as importantly, React’s mature ecosystem provides a rich set of tools and patterns that support consistent implementation, testing, and collaboration—making it an ideal foundation for building structured, cohesive interfaces, which naturally leads into why I value working with design systems.
            </p>
            <h3>Why do I prefer working with design systems?</h3>
            <p>
                I prefer working with design systems because they create a shared foundation that benefits both designers and engineers while scaling effectively across large applications. I enjoy contributing to the creation and evolution of design systems just as much as I enjoy using them, ensuring they are flexible, well-documented, and grounded in real implementation needs. Design systems streamline development by reducing duplication, increasing efficiency, and enabling teams to move faster with confidence. Most importantly, they drive consistency across products, helping teams deliver cohesive, high-quality user experiences while maintaining long-term maintainability.
            </p>
            <h3>How I use Atomic Design with Design Systems and React to ensure scalability?</h3>
            <p>
                I use Atomic Design with React and design systems to create scalable architectures that clearly separate concerns and support long-term growth. My preferred approach distinguishes pages from the core atomic levels—atoms, molecules, and organisms—allowing pages to focus on routing, data orchestration, and layout, while reusable components remain framework-agnostic and easy to evolve. This separation simplifies routing logic, reduces coupling between UI and application state, and promotes reuse across multiple features and products. By grounding this structure in a design system, teams can scale confidently while maintaining consistency, flexibility, and clarity as applications become more complex.
            </p>
            <h3>What is storybook and how can it be combined with Atomic Design to create Design Systems?</h3>
            <p>
                Storybook is an open-source tool for developing UI components in isolation for React, Vue, Angular, 
                and other frontend frameworks. It provides a sandbox environment where developers can create and 
                showcase individual components independently of the main application, allowing for easier testing, 
                iteration, and collaboration. When used in conjunction with Atomic Design principles, Storybook becomes 
                the soures of truth for the design system.
            </p>
            <h3>How do I use AI in my workflow to increase productivity and efficiency?</h3>
            <p>
                I use AI as a force multiplier in my workflow to increase productivity and efficiency, using it to augment and amplify my existing skills and experience. As 2025 has made clear, AI excels when guided by a skilled developer—much like a chainsaw compared to an axe, it dramatically accelerates the work but still requires expertise to use safely and effectively. I rely on AI to explore solutions, reduce boilerplate, and accelerate iteration, while applying human oversight to architecture, edge cases, performance, and reliability. Production-ready software still demands a human element, but a solid engineer leveraging AI can now achieve outcomes that once required entire teams, without sacrificing quality or maintainability.
            </p>
        </span>
        </>
        
    );
};

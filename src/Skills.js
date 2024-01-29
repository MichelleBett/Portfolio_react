
import React, { useState, useEffect } from 'react';

const Skills = () => {
    const [activeSection, setActiveSection] = useState('one');

    const handleSectionClick = (section) => {
        setActiveSection(section);
    };

    return (
        <section className="skills container" id="skills">
            <div className="skills-header">
                <h2 className="secondary-title">Skills</h2>
                <div className="con">
                    <div className={`section one ${activeSection === 'one' ? 'active' : ''}`} onClick={() => handleSectionClick('one')}></div>
                    <div className={`section two ${activeSection === 'two' ? 'active' : ''}`} onClick={() => handleSectionClick('two')}></div>
                    <div className={`section three ${activeSection === 'three' ? 'active' : ''}`} onClick={() => handleSectionClick('three')}></div>
                    <div className={`section four ${activeSection === 'four' ? 'active' : ''}`} onClick={() => handleSectionClick('four')}></div>
                </div>
            </div>
        </section>
    );
}

export default Skills;

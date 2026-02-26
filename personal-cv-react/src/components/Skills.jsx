import { useState } from "react";

function Skills() {
    const [visible, setVisible] = useState(true);
    return (
    <>
        <section className = "card" id="skillsSection">
            <button onClick={() => setVisible(!visible)}>
            Show/Hide Skills
            </button>

            
            {visible && (
            <><h2>Skills</h2><ul>
                    <li>Web Development</li>
                    <ul>
                        <li>Frontend</li>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                        </ul>
                        <li>Backend</li>
                    </ul>

                </ul></>
            )}
    </section>
    </>  
    );
    }
    export default Skills;
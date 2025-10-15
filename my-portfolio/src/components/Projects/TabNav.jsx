import { projectTabs } from "../../../data"
import TabBtn from "./TabBtn"

export default function TabNav({topic, onTopicChange, isMobile = false}) {
    return (
        <>
            <ul className={`${isMobile ? 'flex justify-center space-x-4 mb-5' : 'flex-col space-y-5 tabbtn'}`}>
                {projectTabs.map((tab) => (
                    <li key={tab.id}>
                        <TabBtn 
                            onSelect={() => onTopicChange(tab.id)} 
                            isSelected={topic === tab.id}
                        >
                            {tab.label}
                        </TabBtn>

                        {!isMobile && <p>{tab.name}</p>}
                    </li>
                ))}
            </ul>
        </>
    )
}
import Profile from "./section/Profile";
import Summary from "./section/Summary";
import Education from "./section/Education";
import ExperienceWork from "./section/ExperienceWork";
import Skills from "./section/Skills";
import Portfolio from "./section/Portfolio";
import Achievement from "./section/Achievement";
import Organization from "./section/Organization";
import Volunteer from "./section/Volunteer";
import TrainingCourse from "./section/TrainingCourse";
import Certification from "./section/Certification";
import {
    DndContext,
    closestCenter,
    PointerSensor,
    KeyboardSensor,
    useSensor,
    useSensors,
} from "@dnd-kit/core";

import {
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
    arrayMove,
} from "@dnd-kit/sortable";

import SortableSection from "./SortableSection";

function Form({ cvData, setCvData, sectionOrder, setSectionOrder }) {
    // Konfigurasi sensor drag and drop
    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 5,
            },
        }),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        }),
    );

    // Mengubah urutan section setelah drag selesai
    const handleDragEnd = ({ active, over }) => {
        if (!over || active.id === over.id) return;

        setSectionOrder((items) => {
            const oldIndex = items.indexOf(active.id);
            const newIndex = items.indexOf(over.id);

            if (oldIndex === -1 || newIndex === -1) {
                return items;
            }

            return arrayMove(items, oldIndex, newIndex);
        });
    };

    // Daftar section yang dapat dipindahkan
    const sections = {
        summary: (dragHandleProps) => (
            <Summary
                summary={cvData.summary}
                setCvData={setCvData}
                dragHandleProps={dragHandleProps}
            />
        ),

        education: (dragHandleProps) => (
            <Education
                education={cvData.education}
                setCvData={setCvData}
                dragHandleProps={dragHandleProps}
            />
        ),

        experienceWork: (dragHandleProps) => (
            <ExperienceWork
                experienceWork={cvData.experienceWork}
                setCvData={setCvData}
                dragHandleProps={dragHandleProps}
            />
        ),

        skills: (dragHandleProps) => (
            <Skills cvData={cvData} setCvData={setCvData} dragHandleProps={dragHandleProps} />
        ),

        portfolio: (dragHandleProps) => (
            <Portfolio
                portfolio={cvData.portfolio}
                setCvData={setCvData}
                dragHandleProps={dragHandleProps}
            />
        ),

        achievement: (dragHandleProps) => (
            <Achievement
                achievement={cvData.achievement}
                setCvData={setCvData}
                dragHandleProps={dragHandleProps}
            />
        ),

        organization: (dragHandleProps) => (
            <Organization
                organization={cvData.organization}
                setCvData={setCvData}
                dragHandleProps={dragHandleProps}
            />
        ),

        volunteer: (dragHandleProps) => (
            <Volunteer
                volunteer={cvData.volunteer}
                setCvData={setCvData}
                dragHandleProps={dragHandleProps}
            />
        ),

        trainingCourse: (dragHandleProps) => (
            <TrainingCourse
                trainingCourse={cvData.trainingCourse}
                setCvData={setCvData}
                dragHandleProps={dragHandleProps}
            />
        ),

        certification: (dragHandleProps) => (
            <Certification
                certification={cvData.certification}
                setCvData={setCvData}
                dragHandleProps={dragHandleProps}
            />
        ),
    };

    return (
        <section
            id="form"
            className="min-h-0 w-[40%] scrollbar-thin space-y-3 overflow-y-auto px-6 py-7"
        >
            <Profile cvData={cvData} setCvData={setCvData} />

            <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
            >
                <SortableContext items={sectionOrder} strategy={verticalListSortingStrategy}>
                    {sectionOrder.map((id) => {
                        const renderSection = sections[id];

                        if (!renderSection) return null;

                        return (
                            <SortableSection key={id} id={id}>
                                {(dragHandleProps) => renderSection(dragHandleProps)}
                            </SortableSection>
                        );
                    })}
                </SortableContext>
            </DndContext>
        </section>
    );
}

export default Form;

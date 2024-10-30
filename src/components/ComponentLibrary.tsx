import React from 'react';
import { useDrag } from 'react-dnd';

const DraggableComponent = ({ name }: { name: string }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'component',
        item: { name },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1, cursor: 'move', padding: '5px', border: '1px solid #ccc', margin: '5px' }}>
            {name}
        </div>
    );
};

const ComponentLibrary: React.FC = () => {
    return (
        <div>
            <h2>Available Components</h2>
            <DraggableComponent name="Server" />
            <DraggableComponent name="Database" />
            <DraggableComponent name="Client" />
            {/* Add more components as needed */}
        </div>
    );
};

export default ComponentLibrary;
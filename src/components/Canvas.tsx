import React from 'react';
import { useDrop } from 'react-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { addComponent } from '../features/designSlice';

const Canvas: React.FC = () => {
    const dispatch = useDispatch();
    const components: string[] = useSelector((state: any) => state.design.components); // Explicitly type the components array

    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'component',
        drop: (item: { name: string }) => {
            dispatch(addComponent(item.name));
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    return (
        <main ref={drop} style={{ flex: 1, padding: '10px', background: isOver ? '#d3ffd3' : '#eaeaea', border: '1px dashed #ccc' }}>
            <h2>Design Canvas</h2>
            {components.map((component: string, index: number) => ( // Explicitly type parameters
                <div key={index} style={{ padding: '5px', border: '1px solid #000', margin: '5px' }}>
                    {component}
                </div>
            ))}
        </main>
    );
};

export default Canvas;
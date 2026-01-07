import { WindowModel } from "../WindowClasses";

interface WindowProps {
    model: WindowModel;
    margin: number;
    border_width: number;
};

export default function Window({ model, margin, border_width
}: WindowProps) {

    return (<div className="absolute flex flex-col border-radius overflow-hidden" style={
        {
            height: `${model.height}vh`,
            width: `${model.width}vw`,
            top: `${model.posY}px`,
            left: `${model.posX}px`,
            margin: `${margin}px`,
            border: `${border_width}px solid var(--border)`,
        }
    } >
    </div >);
}
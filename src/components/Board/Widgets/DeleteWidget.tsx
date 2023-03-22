import { X } from "react-feather";
import { useBoard } from "../../../hooks/useBoard";

export default function DeleteWidget({ id }: DeleteWidgetProps) {
    const { deleteWidget } = useBoard();

    function handleDelete() {
        if (window.confirm("Widget will be deleted")) {
            deleteWidget(id);
        }
    }
    return (
        <div className="widgetButtons">
            <div
                onClick={handleDelete}
                style={{
                    cursor: "pointer",
                    paddingLeft: 5,
                }}
            >
                <X size={14} />
            </div>
        </div>
    );
}

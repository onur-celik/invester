import { memo, useEffect, useRef, useState } from "react";
import DeleteWidget from "../DeleteWidget";
import { Widget } from "../../Board";

const NoteWidget = memo(function ({ id }: { id: string }) {
    const titleRef = useRef(null);
    const contentRef = useRef(null);
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");

    useEffect(() => {
        const widgets = JSON.parse(localStorage.getItem("widgets") as string);
        widgets.map((w: Widget) => {
            if (w.i === id) {
                setTitle(w?.title as string);
                setContent(w.content as string);
            }
            return w;
        });
        // eslint-disable-next-line
    }, []);

    function saveNote(type: "title" | "content", newContent: string) {
        const widgets = JSON.parse(localStorage.getItem("widgets") as string);
        const widgetsEdited = widgets.map((w: Widget) => {
            if (w.i === id) {
                w[type] = newContent;
            }
            return w;
        });
        localStorage.setItem("widgets", JSON.stringify(widgetsEdited));
    }

    function handleNoteTitleChange(e: any) {
        setTitle(e.target.value);
        saveNote("title", e.target.value);
    }

    function handleNoteContentChange(e: any) {
        setContent(e.target.value);
        saveNote("content", e.target.value);
    }

    return (
        <div className="widget NoteWidget">
            <div className="header">
                <div className="widgetTitle">Note - {title || ""}</div>
                <DeleteWidget id={id} />
            </div>
            <div className="content">
                <input
                    className="note_title"
                    ref={titleRef}
                    onChange={handleNoteTitleChange}
                    value={title || ""}
                    placeholder="Note Title"
                />
                <textarea
                    spellCheck={false}
                    className="note_content"
                    ref={contentRef}
                    value={content}
                    onChange={handleNoteContentChange}
                    placeholder="I bought 1 BTC when it was $1"
                />
            </div>
        </div>
    );
});

export default NoteWidget;

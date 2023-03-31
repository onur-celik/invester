import React, {
    Dispatch,
    SetStateAction,
    memo,
    useEffect,
    useState,
} from "react";
import DeleteWidget from "../DeleteWidget";
import { ChevronRight } from "react-feather";
import { Widget } from "../../Board";

const BookmarksWidget = memo(function ({
    id,
    bookmarks,
}: {
    id: string;
    bookmarks: Bookmark[];
}) {
    const [createMode, setCreateMode] = useState<boolean>(false);
    const [editMode, setEditMode] = useState<boolean>(false);
    const [widgetBookmarks, setWidgetBookmarks] = useState<Bookmark[]>([]);

    function handleCreateBookmark() {
        setCreateMode(true);
    }

    useEffect(() => {
        setWidgetBookmarks(bookmarks);
    }, [bookmarks]);

    return (
        <div className="widget BookmarksWidget">
            <div className="header">
                <div className="widgetTitle">Bookmarks</div>
                <DeleteWidget id={id} />
            </div>
            <div className="content">
                {createMode && (
                    <CreateModeForm
                        setCreateMode={setCreateMode}
                        id={id}
                        setWidgetBookmarks={setWidgetBookmarks}
                    />
                )}
                {widgetBookmarks.length === 0 ? (
                    <h3>No Bookmarks yet!</h3>
                ) : (
                    <ul>
                        {widgetBookmarks.map((bm: Bookmark, index: number) => (
                            <li key={index}>
                                {!editMode ? (
                                    <a href={bm.link} target="_blank">
                                        <span>{bm.title}</span>
                                        <span>
                                            <ChevronRight size={14} />
                                        </span>
                                    </a>
                                ) : (
                                    <a
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            if (
                                                window.confirm("Are you sure?")
                                            ) {
                                                // TODO: refactor here..
                                                const newList: Bookmark[] =
                                                    widgetBookmarks.filter(
                                                        (wbm) =>
                                                            wbm.title !==
                                                            bm.title
                                                    );
                                                setWidgetBookmarks(newList);

                                                const widgets = JSON.parse(
                                                    window.localStorage.getItem(
                                                        "widgets"
                                                    ) as string
                                                );
                                                const widgetsEdited =
                                                    widgets.map((w: Widget) => {
                                                        if (w.i === id) {
                                                            w.bookmarks =
                                                                newList;
                                                        }
                                                        return w;
                                                    });
                                                localStorage.setItem(
                                                    "widgets",
                                                    JSON.stringify(
                                                        widgetsEdited
                                                    )
                                                );
                                                setEditMode(false);
                                            }
                                        }}
                                    >
                                        {bm.title} - Delete
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                )}

                {!createMode && !editMode && (
                    <div style={{ display: "flex" }}>
                        <button
                            style={{ marginRight: 10, opacity: 0.6 }}
                            onClick={(e) => {
                                setEditMode(true);
                            }}
                        >
                            Edit
                        </button>
                        <button onClick={handleCreateBookmark}>
                            Create Bookmark
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
});

const CreateModeForm = ({
    setCreateMode,
    id,
    setWidgetBookmarks,
}: {
    setCreateMode: Dispatch<SetStateAction<boolean>>;
    setWidgetBookmarks: Dispatch<SetStateAction<Bookmark[]>>;
    id: string;
}) => {
    const [formData, setFormData] = useState<{ title: string; link: string }>({
        title: "",
        link: "",
    });

    function handleSaveBookmark(e: any) {
        e.preventDefault();
        if (formData.title && formData.link) {
            const widgets = JSON.parse(
                window.localStorage.getItem("widgets") as string
            );

            const widgetsEdited = widgets.map((w: Widget) => {
                if (w.i === id) {
                    if (w.bookmarks) {
                        w.bookmarks.push(formData);
                    } else {
                        w.bookmarks = [formData];
                    }
                }
                return w;
            });
            localStorage.setItem("widgets", JSON.stringify(widgetsEdited));
            setWidgetBookmarks((bookmarks: Bookmark[]) => [
                ...bookmarks,
                ...[formData],
            ]);
            setCreateMode(false);
        }
    }

    return (
        <div className="createBookmarkForm">
            <form onSubmit={handleSaveBookmark}>
                <label htmlFor="title">Title : </label>
                <br />
                <input
                    onChange={(e) => {
                        setFormData({ ...formData, title: e.target.value });
                    }}
                />

                <br />

                <label htmlFor="link">Link : </label>
                <br />
                <input
                    onChange={(e) => {
                        setFormData({ ...formData, link: e.target.value });
                    }}
                />

                <br />
                <br />
                <div style={{ display: "flex" }}>
                    <button
                        style={{ marginRight: 10, opacity: 0.6 }}
                        onClick={(e) => {
                            e.preventDefault();
                            setCreateMode(false);
                        }}
                    >
                        Cancel
                    </button>
                    <button type="submit">Save Bookmark</button>
                </div>
            </form>
        </div>
    );
};

export default BookmarksWidget;

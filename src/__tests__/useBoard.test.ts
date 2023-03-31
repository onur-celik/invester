// import { renderHook, act, RenderHookResult } from "@testing-library/react";
// import { useBoard } from "../hooks/useBoard";
// import { INITIAL_LAYOUT, INITIAL_WIDGETS } from "../constants/initials";

// describe("useBoard", () => {
//     test("save function should dispatch setBoard, setWidgets and setLayouts actions", async () => {
//         const { result, waitForNextUpdate }: RenderHookResult<UseBoardMethods> =
//             renderHook(() => useBoard());

//         const layout = INITIAL_LAYOUT;
//         const widgets = INITIAL_WIDGETS;

//         await act(async () => {
//             await result.current.save({ layout, widgets });
//             await waitForNextUpdate();
//         });

//         expect(result.current).toMatchObject({
//             save: expect.any(Function),
//             init: expect.any(Function),
//             createLayout: expect.any(Function),
//             generateLayoutArray: expect.any(Function),
//             getBoard: expect.any(Function),
//             deleteWidget: expect.any(Function),
//         });

//         expect(result.current).toHaveProperty("save");
//         expect(result.current).toHaveProperty("init");
//         expect(result.current).toHaveProperty("createLayout");
//         expect(result.current).toHaveProperty("generateLayoutArray");
//         expect(result.current).toHaveProperty("getBoard");
//         expect(result.current).toHaveProperty("deleteWidget");

//         expect(result.current.save).toEqual(expect.any(Function));
//         expect(result.current.init).toEqual(expect.any(Function));
//         expect(result.current.createLayout).toEqual(expect.any(Function));
//         expect(result.current.generateLayoutArray).toEqual(
//             expect.any(Function)
//         );
//         expect(result.current.getBoard).toEqual(expect.any(Function));
//         expect(result.current.deleteWidget).toEqual(expect.any(Function));

//         expect(result.current.save).toHaveBeenCalledTimes(1);
//         expect(result.current.save).toHaveBeenCalledWith({ layout, widgets });

//         expect(result.current.init).toHaveBeenCalledTimes(0);
//         expect(result.current.createLayout).toHaveBeenCalledTimes(0);
//         expect(result.current.generateLayoutArray).toHaveBeenCalledTimes(1);
//         expect(result.current.getBoard).toHaveBeenCalledTimes(0);
//         expect(result.current.deleteWidget).toHaveBeenCalledTimes(0);
//     });
// });

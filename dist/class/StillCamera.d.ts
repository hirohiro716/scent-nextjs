import { RefObject } from "react";
/**
 * スチールカメラのクラス。
 */
export default class StillCamera {
    /**
     * コンストラクタ。プレビューを表示するHTMLDivElementのRefObjectを指定する。
     *
     * @param refObject
     */
    constructor(refObject: RefObject<HTMLDivElement>);
    private refObject;
    private divDefaultChildNodes;
    private mediaStream;
    private htmlVideoElement;
    private htmlCanvasElement;
    /**
     * カメラを起動する。
     *
     * @param facingMode インカメラを使用する場合は指定する。
     * @returns
     */
    start(facingMode?: "user" | "environment"): Promise<{
        video: HTMLVideoElement;
        canvas: HTMLCanvasElement;
    }>;
    /**
     * video要素に表示されている映像をキャプチャする。画像サイズはcanvas要素の属性値に依存する。
     *
     * @returns
     */
    capture(): Promise<HTMLCanvasElement>;
    /**
     * キャプチャ後に停止したカメラを再開する。
     *
     * @returns
     */
    restart(): void;
    /**
     * カメラを停止する。
     */
    stop(): void;
}

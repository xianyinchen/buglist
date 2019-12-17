const { ccclass, property } = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property(cc.Sprite)
    spr: cc.Sprite = null;

    @property
    text: string = 'hello';

    private _downloader: any = null;

    start() {
        // init logic
       
        this._downloader = new jsb.Downloader();
        this._downloader.setOnFileTaskSuccess(this.onSucceed.bind(this));
        this._downloader.setOnTaskProgress(this.onProgress.bind(this));
        this._downloader.setOnTaskError(this.onError.bind(this));
    }

    btnStartDownload() {
        var dataUrl = 'https://cfile.weile.com/release/com.tencent.tmgp.weile.buyu_264_210_1.9.1_191_yingyongbao_20190911_174619.apk'
        this._downloader.createDownloadFileTask(dataUrl, jsb.fileUtils.getWritablePath() + 'yingyongbao_20190911_174619.apk');
        this.label.string = 'start downloading ...'
    }

    onSucceed(task) {
        this.label.string = 'finish'
    }

    onProgress(task, bytesReceived, totalBytesReceived, totalBytesExpected) {
        // 1380   479472    484123
        cc.log(`${bytesReceived} ${Math.ceil(totalBytesReceived/totalBytesExpected)} `))
        this.label.string = `${bytesReceived}   ${totalBytesReceived}    ${totalBytesExpected}`
    }

    onError(task, errorCode, errorCodeInternal, errorStr) {
        this.label.string = 'Failed to download file (' + task.requestURL + '): ' + errorStr + '(' + errorCode + ')';
    }
}

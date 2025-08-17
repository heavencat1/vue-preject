import { exportTxt } from '../api/index'




export function downloadFile(blobData, mimeType, fileName) {

    // 创建 Blob 对象，包含二进制文件流和文件类型
    const blobObj = new Blob([blobData], { type: mimeType });

    // 创建下载链接元素
    const downloadLink = document.createElement('a');

    // 处理不同浏览器的 URL 兼容性
    let url = window.URL || window.webkitURL;
    url = url.createObjectURL(blobObj); // 创建文件 URL

    // 设置下载链接属性
    downloadLink.href = url;
    downloadLink.download = fileName;

    // 将下载链接添加到文档中并触发点击事件
    document.body.appendChild(downloadLink);
    downloadLink.click();

    // 移除下载链接并释放 URL 对象
    document.body.removeChild(downloadLink);
    window.URL.revokeObjectURL(url);


}


export function getFileName(contentDisposition) {
    let fileName;
    let filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
    let matches = filenameRegex.exec(contentDisposition);
    if (matches != null && matches[1]) {
        fileName = matches[1].replace(/['"]/g, '');
    }
    return fileName
}











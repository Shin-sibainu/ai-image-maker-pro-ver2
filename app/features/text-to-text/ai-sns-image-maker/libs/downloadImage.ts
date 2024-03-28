export const downloadImage = async (imageUrl: string) => {
  try {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", imageUrl); // ダウンロードするファイルの名前を設定
    document.body.appendChild(link);
    link.click();
    window.URL.revokeObjectURL(url); // 使用済みのオブジェクトURLを解放
    link.remove(); // リンク要素をDOMから削除
  } catch (error) {
    console.error("画像のダウンロードに失敗しました", error);
  }
};

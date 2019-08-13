const tf = require('@tensorflow/tfjs')
const tfvis = require('@tensorflow/tfjs-vis')

    // 两个数组的相似度
    ; (async () => {
        const labels = tf.tensor1d([0, 0, 0, 2, 2, 2]);
        const predictions = tf.tensor1d([0, 0, 0, 2, 1, 1]);
        const result = await tfvis.metrics.accuracy(labels, predictions);
        console.log(result)  // 0.66666    六个数字有4个相同
    })()

    ; (async () => {
        const labels = tf.tensor1d([0, 1, 2, 4]);
        const predictions = tf.tensor1d([0, 2, 2, 4]);
        const result = await tfvis.metrics.confusionMatrix(labels, predictions);
        console.log(result)
    })()
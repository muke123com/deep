const tf = require('@tensorflow/tfjs')
async function run() {
    //创建一个简单的模型。
    const model = tf.sequential();
    model.add(tf.layers.dense({ units: 1, inputShape: [1] }))
    //为训练准备模型：指定损失和优化程序。
    model.compile({
        loss: 'meanSquaredError',
        optimizer: 'sgd'
    })

    // 为训练生成一些合成数据。 y = 2x - 1;
    const xs = tf.tensor2d([1, 2, 3, 4, 5, 6, 7, 8], [8, 1]);
    const ys = tf.tensor2d([1, 3, 5, 7, 9, 11, 13, 15], [8, 1]);
    //使用数据训练模型。
    await model.fit(xs, ys, { epochs: 200 });

    model.predict(tf.tensor2d([200], [1, 1])).print()
}

// tf.range(0, 9, 2).print();


run();
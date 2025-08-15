        // 定义句子数组
        const quotes = [
            { text: "没有草原我还是一匹马，没有大海我还是一条鱼，没有天空我还是一只鸟，没有光我还是金子。", author: "朴树" },
            { text: "瘸瘸腿的马，无鳍的鱼，折翼的鸟，蒙尘的金，但那就是我，那才是我啊。", author: "朴树" },
            { text: "我曾经跨过山和大海，也穿过人山人海，我曾经拥有着的一切，转眼都飘散如烟。", author: "朴树《平凡之路》" },
            { text: "生如夏花般绚烂，死如秋叶般静美，还在乎拥有什么。", author: "朴树《生如夏花》" },
            { text: "时光真疯狂，我一路执迷与匆忙，依稀悲伤，来不及遗忘，只有待风将她埋葬。", author: "朴树《且听风吟》" },
            { text: "易碎的，骄傲着，那也曾是我的模样。沸腾着的，不安着的，你要去哪。", author: "朴树《平凡之路》" },
            { text: "生活不止眼前的苟且，还有诗和远方的田野。", author: "高晓松" },
            { text: "保持温热感是一件很了不起的事情。", author: "松浦弥太郎" },
            { text: "生命可以随心所欲，但不能随波逐流。", author: "宫崎骏" },
            { text: "最长的路也有尽头，最黑暗的夜晚也会迎接清晨。", author: "斯托夫人" },
            { text: "每个聪明人都知道如何接受失败而继续前进。", author: "迈克尔·乔丹" },
            { text: "希望是很好的早餐，却是很糟的晚餐。", author: "弗朗西斯·培根" },
            { text: "昨天已是历史，明天依旧成谜，但今天是个礼物。", author: "孔子" }
        ];

        // 页面加载时执行
        window.onload = function() {
            // 随机选择一句话
            const randomIndex = Math.floor(Math.random() * quotes.length);
            const quote = quotes[randomIndex];
            
            // 更新内容
            document.querySelector('.quote-content').textContent = quote.text;
            document.querySelector('.quote-author').textContent = '—— ' + quote.author;
            
            // 可选：添加微妙的效果
            document.body.style.backgroundColor = getRandomLightColor();
            document.querySelector('.quote-container').style.transform = 'scale(0.98)';
            setTimeout(() => {
                document.querySelector('.quote-container').style.transform = 'scale(1)';
            }, 50);
        };
        
        // 生成随机的浅色背景
        function getRandomLightColor() {
            const hue = Math.floor(Math.random() * 360);
            return `hsl(${hue}, 30%, 97%)`;
        }

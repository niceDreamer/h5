//解题思路：我们需要解决两个事情，一个是头像的排布问题，这个必须是随机的，第二个就觉头像的闪动问题，第三个头像必须是随机的，根据图片的个数来

class Radar {
    constructor() {
        this.width = [];
        this.height = [];
        this.deg = [];
        this.rad = [];
    };
    init() {
        this.imgSize();
    };
    //给每个头像的大小随机,以及角度
    imgSize() {
        //在50到150之间随意取大小
        let width = Math.round((Math.random() + .5) * 100);
        this.width.push(width);
        this.height.push(width);
        //在0到360之间随意取角度
        let deg = Math.round(Math.random() * 360);
        this.deg.push(deg);
        //在0到600之间随意取半径
        let rad = Math.round(Math.random() * 600);
        this.rad.push(rad);
    }
    //获取n个长宽高
    imgSizeGroup () {
        const imgGroup = document.getElementsByClassName('img-item');
        for(let i = 0; i < imgGroup.length; i++) {
            this.imgSize();
        }
    }
}

const radar = new Radar();

radar.init();
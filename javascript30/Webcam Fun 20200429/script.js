    /** @type {HTMLVideoElement} */
    const video = document.querySelector('.player');
    /** @type {HTMLCanvasElement}  */
    const canvas = document.querySelector('.photo');
    const ctx = canvas.getContext('2d');
    const strip = document.querySelector('.strip');
    const snap = document.querySelector('.snap');
    const inputs = document.querySelectorAll("input[type='range']")
    let img = document.querySelector("img")
    let originImg
        //声明rgb在图片数组中的最初的位置
    let startRGB = {
            "r": 0,
            "g": 1,
            "b": 2
        }
        //声明色彩范围
    let filter = {
        "rmin": 0,
        "rmax": 255,
        "gmin": 0,
        "gmax": 255,
        "bmin": 0,
        "bmax": 255
    }

    let antiNameList = {
            "rmin": "rmax",
            "rmax": "rmin",
            "gmin": "gmax",
            "gmax": "gmin",
            "bmin": "bmax",
            "bmax": "bmin"
        }
        //声明canvas的大小，不需要加px
    canvas.height = "200"
    canvas.width = "300"
        //获取用户摄像头的方法。返回的是一个promise对象，所以可以直接用then
    navigator.mediaDevices.getUserMedia({ video: { width: 300, height: 200 } }).then(function(mediaStream) {
        video.srcObject = mediaStream
        video.onloadedmetadata = function() {
            video.play()
        }
    }).catch(function() {
        console.error("拒绝访问");
    })


    function takePhoto() {
        ctx.drawImage(video, 0, 0, 300, 200)
        originImg = ctx.getImageData(0, 0, 300, 200)

    }


    inputs.forEach(item => {
        item.onchange = function(event) {
            //获取最初的照片色彩
            ctx.putImageData(originImg, 0, 0);
            //拿到照片的色彩范围
            let tempFilter = checkFilter(event.target.name, event.target.value);
            const filterMin = tempFilter.min;
            const filterMax = tempFilter.max;
            console.log(filter);
            //重新声明新照片，用来暂时覆盖掉原始照片
            let img = ctx.getImageData(0, 0, 300, 200)
            for (let i = startRGB[event.target.name[0]]; i < img.data.length; i += 4) {
                if (img.data[i] < filterMin) {
                    img.data[i] = filterMin
                } else if (img.data[i] > filterMax) {
                    img.data[i] = filterMax
                }
            }

            ctx.putImageData(img, 0, 0)
        }
    })

    //滤色函数
    function checkFilter(name, value) {
        var _min;
        var _max;
        var _antiname = {
            'rmin': 'rmax',
            'rmax': 'rmin',
            'gmin': 'gmax',
            'gmax': 'gmin',
            'bmin': 'bmax',
            'bmax': 'bmin'
        }[name]
        filter[name] = value;
        //当下限值超过上限时，将两者对调
        _min = Math.min(filter[name], filter[_antiname]);
        _max = Math.max(filter[name], filter[_antiname]);
        return {
            min: _min,
            max: _max
        }
    }

    function savePhoto() {
        img.src = canvas.toDataURL()
    }
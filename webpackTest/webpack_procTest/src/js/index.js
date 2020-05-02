import '../css/index.less';
import '../css/iconfont.css';

function a() {
  console.log('djdd');
}
a();

const arr = ['1', '2', 3, 34];
arr.forEach((item) => {
  console.log(item);
});

const p = new Promise((resolve) => {
  console.log(resolve);
});
p.then((resolve) => {
  console.log(resolve, 'success');
});

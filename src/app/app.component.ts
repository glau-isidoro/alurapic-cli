import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pictures';

  photos = [
    {
      url: 'https://beimg.com/fangimg.php?url=http://mmbiz.qpic.cn/mmbiz_jpg/0k5yS9t2UnT97f5GxqFruLYYIPStS129iaXag0N4WDlNLsrAhWPWvRkcfkg48ERpT4AHTqHBvCUMiadNXUtbbRBA/0?wx_fmt=jpeg',
      description: 'Cats by Okirakuoki'
    },
    {
      url: 'https://i.pinimg.com/736x/52/ab/c4/52abc4b8aa7f5e436ad7df0c1a106c7c.jpg',
      description: 'Cat bath by Okirakuoki'
    },
    {
      url: 'https://scontent-sea1-1.cdninstagram.com/vp/777789b495a3a8da00e873f8740e1e89/5B820399/t51.2885-15/e35/32656506_234254070459602_4179114934057041920_n.jpg?se=7&ig_cache_key=MTc4NTkyNzM3MzAwNTIwOTc2MQ%3D%3D.2',
      description: 'Cat showing belly by Okirakuoki'
    }
  ]
}

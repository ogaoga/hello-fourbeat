How to
======

`fourbeat` イベントが発行されるので、

    $(document).on('fourbeat', function(e, data){
        // write something
    });

のような感じでイベントを受けて、処理します。

`data` のキー `event` に `PRESS` / `RELEASE` が、
`color` に `RED` / `BLUE` / `GREEN` / `YELLOW` が入ってきます。

Sample
======

http://hello-fourbeat.meteor.com/





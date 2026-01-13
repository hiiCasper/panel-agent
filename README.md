## 如何定时自动播放和关闭? 

后端写了一个脚本, 安装到panel后,可以监听该panel目前应当进行的schedule, 如果有需要进行的schedule,脚本会自动开启浏览器并访问网页： 

 
http://47.97.211.83:3000/auto-player?scheduleId={schedule_id} 


其中scheduleId后端已经获取, 前端根据该scheduleId获取对应的文件进行播放. 

到schedule的结束时间时,网页会自动关闭. 

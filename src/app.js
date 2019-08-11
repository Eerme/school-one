import express from 'express'
import config from './config'
import nunjucks from 'nunjucks'

//1.引入路由
import sowingRouter from './../router/sowing'
import indexRouter from './../router/index'
const app = express();


//1.配置公共资源路径(进来就访问public里面的资源);
app.use(express.static(config.publicPath));//如果不配置此项目，界面无法正常显示
//2.让nunjucks可以作用到views文件夹
nunjucks.configure(config.viewPath, {
    autoescape: true,
    express: app,
    noCache: true//不使用缓存
});

//3.挂载路由
app.use(indexRouter);
app.use(sowingRouter);

//4.配置404界面（因为上面的界面都找不到了）
app.use((req,res)=>{
    res.render('404.html')
});
app.listen(3000,()=>{
    console.log('服务器已启动！');
});

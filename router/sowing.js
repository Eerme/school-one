import express from 'express'
import Sowing from '../model/Sowing'
let router = express.Router({});
/*****************************接口api*************************/
router.get('/back/sowing/api/add',(req,res)=>{
    let sowing = new Sowing({
        image_title: '夏日',
        image_url: 'http://www.xiaoshutong.cn/',
        image_link: 'http://www.xiaoshutong.cn/',
        up_time: '2017-08-06',
        down_time: '2018-10-01',
    });
    sowing.save((err,result)=>{
        if (err) {
            throw err;
        }
        res.json({
            status: 200,
            result: '添加轮播图成功'
        })
    })
});
export default router
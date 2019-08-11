import express from 'express'
let router = express.Router({});
/************后端路由***********/
router.get('/back',(req,res)=>{
    res.render('back/index.html');
});
/************前端路由***********/
router.get('/web',(req,res)=>{
    res.render('web/index.html');
});
router.get('/web',(req,res)=>{
    res.render('web/index.html');
});
router.get('/web/res',(req,res)=>{
    res.render('web/resources.html');
});
router.get('/web/res_c',(req,res)=>{
    res.render('web/resources_content.html');
});

router.get('/',()=>{
   res.redirect('web/index.html');
});
export default router;

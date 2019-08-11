import mongoose from 'mongoose'
mongoose.connect('mongodb://localhost:27017/school',{useNewUrlParser:true});
mongoose.connection.on('open',()=>{
    console.log('数据库连接成功！');
});
mongoose.connection.on('error',(err)=>{
    console.log('数据库连接失败！');
    throw err;
});
//创建轮播图模式
const sowingSchema =mongoose.Schema({
    image_title: {type: String, required: true},
    image_url: {type: String, required: true},
    image_link: {type: String, required: true},
    up_time: {type: String, required: true},
    down_time: {type: String, required: true},
    l_edit: {type: String, default: Date.now()},
    c_time: {type: String, default: Date.now()}
});
const Sowing = mongoose.model('Sowing',sowingSchema);
export default Sowing;
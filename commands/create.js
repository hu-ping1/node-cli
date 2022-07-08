const inquirer =require('inquirer')
const download=require('download-git-repo')
const ora=require('ora')
const path=require('path')
 let createProject=(name)=>{
    inquirer.prompt([
        // {   
        //     type:'input',
        //     name:'description',
        //     message:'请输入项目描述信息'
        // },
        // {
        //     name:'author',
        //     message:'请输入作者',
        //     default: 'robot'
        // },
        {   
            type:'list',
            name:'template',
            message:'请选择模板',
            choices:[{name:'node后端基础服务',value:'github:hu-ping1/nodeServer'}]
        }
    ]).then(res=>{
        const downloadPath = path.join(process.cwd(), name);
        const spinner = ora('正在下载,请稍后.....')
        spinner.start();
        download(res.template,downloadPath,(err=>{
            if(!err){
                spinner.text='模板下载成功'
                spinner.succeed();
            }else{
                console.log(err)
                spinner.text='模板下载失败'
                spinner.fail();
               
            }
        }))
    })
}

module.exports={
    createProject
}